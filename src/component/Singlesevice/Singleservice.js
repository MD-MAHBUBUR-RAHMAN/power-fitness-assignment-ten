import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Singleservice = (props) => {
  const { name, detail, picture } = props.service;
  return (
    <div className="col-lg-4 shadow-sm rounded">
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{detail}</Card.Text>
          <Button as={Link} to="/checkout">
            Check out
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Singleservice;
