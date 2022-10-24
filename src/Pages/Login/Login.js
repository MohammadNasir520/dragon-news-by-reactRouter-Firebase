import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError]=useState([]);

  const navigate=useNavigate()
const location = useLocation();
const from= location.state?.from?.pathname|| "/"

  const {signInbyEmailAndPassword}=useContext(AuthContext);


  const handleSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log( email, password, );

    signInbyEmailAndPassword(email, password)
    .then(result=>{
      const user= result.user;
      console.log(user);
      setError('')
      form.reset()
      navigate(from, {replace: true})

    })
    .catch(error=>{
      console.error(error)
      setError(error.message)
    })
}
  
  return (
    <Form onSubmit={handleSubmit}>
        
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
          <p className="text-danger">{error}</p>
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
  );
};

export default Login;
