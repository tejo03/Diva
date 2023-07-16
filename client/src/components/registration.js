import React, {useState,setState} from 'react';
import {useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import { useRef } from 'react';
import axios from "axios"
import './style_reg.css'
import Header from './Header';
import Footer from './Footer';
function RegistrationForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullname:"",username:"",password:"",confirmpassword:"",
    registrationnumber:"",rollnumber:"",email:"",mobilenumber:""
  });
  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.id;
    value = e.target.value;

    setUser({...user, [name]:value});
  }

  const PostData = async (e) => {
    e.preventDefault();

     const { fullname, username, password, confirmpassword,
     registrationnumber, rollnumber, email, mobilenumber } = user;

    const res = await fetch('http://localhost:5000/student-register',{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        fullname, username, password, confirmpassword, email
      })

    });

    const data = await res.json();

    if(data.status === 400 || !data ){
      window.alert("Invalid Registration");
      console.log("Invalid Registration")
    }
    else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate("/student-login")
    }
     }
   


    


    return(
      <>
      <Header/>
      <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label="Your FullName" className="form__input" type="text" id="fullname" autoComplete='off'
                   value={user.fullname}
                   onChange={handleInputs}
                   placeholder="Enter Name"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label="Username" className="form__input" type='text' id="username" autoComplete='off' 
                  value={user.username}
                  onChange={handleInputs}
                  placeholder="Enter Registration Number"/>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label= "Password" className="form__input" type="password"  id="password" autoComplete='off'
                   value={user.password}
                   onChange={handleInputs}
                   placeholder="Password"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label="Confirm Password" className="form__input" type="password" id="confirmpassword" autoComplete='off' 
                  value={user.confirmpassword}
                  onChange={handleInputs}
                  placeholder="Confirm Password"/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label="email" type="email" id="email" className="form__input" autoComplete='off' 
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Enter Email"/>
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I certify as a female' />
              </div>

              <MDBBtn className='mb-4' size='lg' onClick={PostData}>Register</MDBBtn>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
      
        
      
      <Footer/>
      </>    
    )       
}
export default RegistrationForm;