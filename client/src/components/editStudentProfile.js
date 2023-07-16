import React from 'react'
import {Link} from "react-router-dom";
import Header from './Header';
import Medium from './medium';
import { useState } from 'react';
import { Navigate ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
    } from 'mdb-react-ui-kit';
const EditStudentprofile=() =>{
    const user= JSON.parse(localStorage.getItem("studentdetails"));
    const [username,setusername] = useState('')
    const [fullname,setname] = useState('')
    const [YearOfPassOut,setyear] = useState('')
    const [email,setemail] = useState('')
    const [mobilenumber,setphone] = useState('')
    const [password,setpass] = useState('')
    const [skilla,setskilla] = useState('')
    const [skillb,setskillb] = useState('')
    const [skillc,setskillc] = useState('')
    const [experience,setexperience]=useState('')
    const [id,setid] = useState('')

    const nav = useNavigate();
    async function submit(e){
        var error = "False";
        setusername(user.username);
        setid(user._id);
        e.preventDefault();
        try{
            await axios.put(`http://localhost:5000/edit-student-profile/${id}`, {
                 mobilenumber, skilla,skillb,skillc,experience
            })
            nav("/student-home")

        }catch(e){
            console.log(e);
        }
    }
    
    return (
        <>
        
        <section style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href='http://localhost:3000/student-home'>Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="http://localhost:3000/student-home">User</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>
  
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid />
                  <p className="text-muted mb-1">{user.fullname}</p>
                  <p className="text-muted mb-4">{user.email}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn>Update Profile</MDBBtn>
                    <MDBBtn outline className="ms-1">Options</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
  
             
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{user.fullname}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{user.email}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{user.mobilenumber}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Excelled Skill -1</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.skilla}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
              
  
              
            </MDBCol>
          </MDBRow>
          
        </MDBContainer>
        <MDBContainer>
          <label>Update Your Details</label>
        <MDBCard className="mb-4">
                <MDBCardBody>
                 
                  
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone Number</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    <MDBCardText className="text-muted"><input id="mobilenumber" name="" onChange={(e)=> {setphone(e.target.value)}} type="text" placeholder="Mobile Number"/></MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Excelled Skill -1</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    <MDBCardText className="text-muted"><input id="skilla" name="" onChange={(e)=> {setskilla(e.target.value)}} type="text" placeholder="Skill-1"/></MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Excelled Skill-2</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    <MDBCardText className="text-muted"><input id="skillb" name="" onChange={(e)=> {setskillb(e.target.value)}} type="text" placeholder="Skill-2"/></MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr/>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Excelled Skill -3</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    <MDBCardText className="text-muted"><input id="skillc" name="" onChange={(e)=> {setskillc(e.target.value)}} type="text" placeholder="Skill-3"/></MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr/>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Experience(In Years)</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    <MDBCardText className="text-muted"><input id="skillc" name="" onChange={(e)=> {setexperience(e.target.value)}} type="Number" placeholder="In Years"/></MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  
                </MDBCardBody>
                <input id="signup" type="submit" onClick={submit}/>
              </MDBCard>

        </MDBContainer>
      </section>

      </>
            
        
        

        
    );
}
export default EditStudentprofile;