import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Singleservice = (props) => {
  const { name, detail, picture, price } = props.service;
  return (
    <div className="col-lg-4 rounded">
      <Card className="h-100">
        <Card.Img variant="top" src={picture} />
        <Card.Body className="p-4">
          <Card.Title>{name}</Card.Title>

          <Card.Text>{price}</Card.Text>
          <Card.Text>{detail}</Card.Text>
          <Button as={Link} to="/checkout" className="d-block">
            Check out
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Singleservice;
