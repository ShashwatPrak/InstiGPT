import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

const LoginRegister = ({login }) => {
  let navigate = useNavigate();

  const [username, setusername] = useState(""); //admin
  const [name, setname] = useState(""); // for student register,
  const [password, setpassword] = useState(""); // all

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === 0) {
      //if user is student and want to register
      register();
    } else {
      // student/ta/admin want to login
      // ta and student both have roll and password
      // admin have username and password

      (async () => {
        const validid = await validateUser();
        if (validid === "-1") {
          alert("Invalid User");
          setpassword("");
        } else {
          navigate(`/TextArea/${validid}`);
        }
      })();
    }
  };

  const register = async () => {
    //register the student in database

    // registering user
    let response = await fetch("app/register/", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/Json",
      },
      body: JSON.stringify({
        name,
        username,
        password
      }),
    });
    let data = await response.text();
    if(data==='0'){
      alert("Already registered!")
      return;
    }
    if(data==='1'){
      setname("");
      navigate("/Login");
    }
  };

  const validateUser = async () => {
    //do validation from backend
    let body_data = { username, password } ;
    let response = await fetch(
      "app/"  + "login/",
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/Json",
        },
        body: JSON.stringify(body_data),
      }
    );
    let data = await response.text();
    return data;
  };

  return (
    <div className="col-md-4 col-md-offset-4 container">
      <h3 className="text-center my-5">
        {(login === 1 ? " Login" : " Register")}
      </h3>

      <Form onSubmit={handleSubmit}>
        {login === 0 ? (
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </Form.Group>
        ) : null}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            {"Username"}
          </Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={
               (e) => setusername(e.target.value)
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
        <br />
        <br />
        { login === 1 ? (
          <Link to={"/Register"}>New Registration?</Link>
        ) : null}
        { login === 0 ? (
          <Link to={"/Login"}>Already have account?</Link>
        ) : null}
        <br />
        <Link to={"/"}>Home Page</Link>
      </Form>
    </div>
  );
};

export default LoginRegister;
