import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Register = () => {

  const navigate= useNavigate()
  const [error, setError]=useState('')
  const [accepted, setAccepted]=useState(false);

  const {createUser,updateUserprofile}=useContext(AuthContext)

const handleSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;
    const name= form.name.value;
    const photoURL = form.photoURL.value;
    const email=form.email.value;
    const password=form.password.value;
    // console.log(name, email, password, photoURL);

    createUser(email, password)
    .then(result=>{
      const user= result.user;
      console.log(user);
      form.reset()
      handleUserProfile(name,photoURL)
navigate('/')
    })
    .catch(error=>{
      console.log(error);
      setError(error.message)
    })
}

const handleUserProfile=(name, photoURL)=>{
  const profile={
    displayName: name,
    photoURL: photoURL
  }
  updateUserprofile(profile)
}

const handleCheck=(event)=>{
  setAccepted(event.target.checked)
  console.log(event.target.checked)
}


    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Your Name" />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name='photoURL' type="text" placeholder="Phot URL" />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
          <p className='text-danger'>{error}</p>
        </Form.Group>
       
        <Form.Group  className="mb-3" controlId="formBasicCheckbox">
        <Form.Check  onClick={handleCheck} type="checkbox" label={<>Accept <Link to='/terms'>terms and condition</Link></>}  />
      </Form.Group>

        <Button variant="primary" type="submit" disabled={!accepted}>
          
          Submit
        </Button>
      </Form>
    );
};

export default Register;