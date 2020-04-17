import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';


function CardBody(props) {
    return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" alt={props.name} src={props.image} />
                        <Card.Body>
                            <Card.Title>{props.name}</Card.Title>
                            <Card.Text>
                                {props.occupation}
                        </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Phone Number: {props.number}</ListGroupItem>
                            <ListGroupItem>Email: {props.email}</ListGroupItem>
                        </ListGroup>
                    </Card>
    );
}

export default CardBody;