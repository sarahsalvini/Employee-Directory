import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Card from './components/Card/Card';
import CardBody from './components/CardBody/CardBody';
import employees from "./employees.json";
import { Container, Row, Col } from 'react-bootstrap';


class App extends Component {
  // Setting this.state.employee to the employee json array
  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

render(){
  return (
    <Card>
       <Header/>
       {this.state.employees.map(employee => (
         <Container>
           <Row>
             <Col md={4}>
             <CardBody
          removeEmployee = {this.removeEmployee}
          id = {employee.id}
          name = {employee.name}
          image = {employee.image}
          occupation = {employee.occupation}
          number = {employee.number}
          email = {employee.email}
        />
             </Col>
           </Row>
         </Container>
       ))}
       </Card>
  );
}
}
export default App;
