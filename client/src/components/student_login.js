import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import { Link,useNavigate,Navigate, json } from 'react-router-dom';
import './App.css'
import Header from './Header';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
import Footer from './Footer';
import axios from 'axios';
// import Student from '../../../server/model/studentSchema';
function LoginForm() {
    
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')
    const nav = useNavigate()
    async function submit(e){
        e.preventDefault()
        try{
            await axios.post("http://localhost:5000/student-login", {
                username, password
            })
            .then(res=>{
                if (res.data === "notexist"){
                    alert("incorect details")
                }else{
                    localStorage.setItem("studentdetails",JSON.stringify(res.data))
                    console.log(res.data,"in the console")
                    
                    alert("Login Sucessfull")
                    nav("/student-home")
                }
            })
        }catch(e){
            console.log(e)
        }
    }

    return(
        <>
        <Header/>
        <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Diva</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput className="form__input" type='text' id="username" autoComplete='off'
                   value={username}
                   onChange={(e) => setusername(e.target.value)}
                   placeholder="Registration Number" />
                <MDBInput className="form__input" type="password"  id="password" autoComplete='off'
                   value={password}
                   onChange={(e) => setpassword(e.target.value)}
                  placeholder="Password" />

              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={submit}>Login</MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="http://localhost:3000/student-register" style={{color: '#393f81'}}>Register here</a></p>

              

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
        
        <Footer/>
        </>
    )

}

export default LoginForm;