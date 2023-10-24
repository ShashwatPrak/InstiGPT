import React from "react";
import LoginCard from "./LoginCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import studentIcon from '../../static/images/adminIcon.png'

const Homepage = () => {
    return (  
    <div>
        <h3 className="text-center my-5" >Welcome to InstIGPT</h3>
      <Container className="">
          <Row>
          <Col></Col>
          <Col>
            <LoginCard  linktoimg = "#" linktologin={"/Login"} linktoregister={"/Register"} />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;