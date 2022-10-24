import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const googleProvider = new GoogleAuthProvider();
  const FacebookProvider= new FacebookAuthProvider()
  const { providerLogin ,facebookLogin } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const handleFacebookLogIn=()=>{
    facebookLogin(FacebookProvider)
    .then(result=>{
      const user= result.user
      console.log(user)
    })
  }

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          variant="outline-primary"
          className="mb-2"
        >
          <FaGoogle /> SignIn With Google
        </Button>

        <Button variant="outline-dark">
          <FaGithub /> SignIn with Github
        </Button>


        <Button 
        onClick={handleFacebookLogIn}
        variant="outline-primary"
        
        
        >
          <FaFacebook /> SignIn with Facebook
        </Button>
      </ButtonGroup>

      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default RightSideNav;
