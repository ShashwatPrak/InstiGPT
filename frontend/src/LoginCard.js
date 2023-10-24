import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ExtraButton({linktoregister}) {
    return (
      <Link to={linktoregister}>
      <Button className="btn-sm" variant="primary">
        Register
      </Button>
      </Link>
    );
  
}

function LoginCard({ linktoimg, linktologin,linktoregister }) {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={linktoimg} />
      <Card.Body>
        <Card.Title className="text-center">User</Card.Title>
        <div className="text-center">
          <Link to={linktologin}>
            <Button className="btn-sm mx-2" variant="primary">
              Login
            </Button>
          </Link>
          <ExtraButton  linktoregister={linktoregister}/>
        </div>
      </Card.Body>
    </Card>
  );
}

export default LoginCard;