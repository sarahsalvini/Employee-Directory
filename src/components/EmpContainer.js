import React, { Component } from 'react';
import Container from './Container';
import Card from './Card';
import Jumbotron from './Jumbotron';
import API from '../utils/API';
import DataTable from './DataTable';

class EmpContainer extends Component {
	state = {
		results: [],
		search: '',
		alphaOrder: true,
	};


	componentDidMount() {
		this.searchEmployees();
	}

	searchEmployees = () => {
		API.search()

			.then((res) =>
				this.setState({ results: res.data.results }, () => this.search())
			)
			.catch((err) => console.log(err));
	};

	handleSort = (sortBy) => {
		console.log(sortBy);
		const { results, alphaOrder } = this.state;
		let sortedEmployees;

		if (sortBy === 'name') {
			if (alphaOrder === true) {
				sortedEmployees = results.sort((a, b) => {
					if (a.name.last < b.name.last) {
						return -1;
					}
					if (a.name.last > b.name.last) {
						return 1;
					}
					return 0;
				});
			} else {
				sortedEmployees = results.sort((a, b) => {
					if (a.name.last > b.name.last) {
						return -1;
					}
					if (a.name.last < b.name.last) {
						return 1;
					}
					return 0;
				});
			}
		} else if (sortBy === 'email') {
			if (alphaOrder === true) {
				sortedEmployees = results.sort((a, b) => {
					if (a.email < b.email) {
						return -1;
					}
					if (a.email > b.email) {
						return 1;
					}
					return 0;
				});
			} else {
				sortedEmployees = results.sort((a, b) => {
					if (a.email > b.email) {
						return -1;
					}
					if (a.email < b.email) {
						return 1;
					}
					return 0;
				});
			}
		}
		this.setState({ results: results, alphaOrder: !alphaOrder });
		console.log(sortedEmployees);
	};

	handleInputChange = (e) => {
	
		const value = e.target.value.toLowerCase();
		const name = e.target.name;

		console.log(`name property: ${name}`, `value property: ${value}`);

		this.setState(
			{
				[name]: value,
			},
			() => {
				this.search();
			}
		);
	};

	search = () => {
		const filteredResults = this.state.results.filter((result) =>
			result.email.includes(this.state.search)
		);


		this.setState({ filteredResults: filteredResults });
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		this.searchEmployees(this.state.search);
	};

	render() {
		if (this.state.results.length === 0) return <p>Loading...</p>;

		return (
			<Container>
				<Jumbotron text="Employee Directory" backgroundColor="#c3f3ff" />

				<Card heading="Search">
					<input
						value={this.state.search}
						name="search"
						type="search"
						onChange={this.handleInputChange}
					/>
				</Card>

				<DataTable
					headShot="Head-Shot"
					name="Name"
					phone="Cell"
					email="Email"
					employees={this.state.results}
					handleSort={this.handleSort}
					search={this.state.search}
				/>
			</Container>
		);
	}
}

export default EmpContainer;
