import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from "react-router-dom";
import Header from './Header';
import Medium from './medium';
import ReactDOM from 'react-dom'
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
const StudentHome=() =>{
    const nav=useNavigate();
    
    const users = JSON.parse(localStorage.getItem("studentdetails"));

    return (
        <>
        
        <section style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href="http://localhost:3000/student-home">Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="#">User</a>
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
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid />
                  <p className="text-muted mb-1">{users.fullname}</p>
                  <p className="text-muted mb-4">{users.email}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn><a href="http://localhost:3000/edit-student-profile" style={{color: "white"}}>Update Profile</a></MDBBtn>
                    <MDBBtn outline className="ms-1"><a href="http://localhost:3000/friends">Find Friends</a></MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
  
              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fas icon="globe fa-lg text-warning" />
                      <MDBCardText>{users.skilla}</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                      <MDBCardText>{users.skillb}</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                      <MDBCardText>{users.skillc}</MDBCardText>
                    </MDBListGroupItem>
                    
                  </MDBListGroup>
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
                      <MDBCardText className="text-muted">{users.fullname}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{users.email}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{users.mobilenumber}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  
                </MDBCardBody>
              </MDBCard>
  
              <MDBRow>
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">=</span> Working Knowledge</MDBCardText>
                      <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                      </MDBProgress>
  
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                      </MDBProgress>
  
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                      </MDBProgress>
  
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                      </MDBProgress>
  
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
  
                
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      </>
    
            
        
        

        
    );
}
export default StudentHome;







// const [studentData,setStudentData]=useState();

    // const callHomePage=async()=>{
    //     try{
            // const res=await fetch('/student-home',{
            //     method:"GET",
            //     headers:{
            //         Accept:"application/json",
            //         "Content-Type":"application/json"
            //     },
            //     credentials:"include"
            // });

    //         const data=await res.json();
    //         console.log(data);
    //         if(res.status === 200){
    //             const error=new Error(res.error)
    //             throw error;
    //         }

    //     }catch(err){
    //         console.log(err)

    //     }
    // }
    // const [data,setData]=useState([]);
    // useState(localStorage.getItem("username"))
    // useEffect(()=>{
        
    //     axios.post("http://localhost:5000/")
        // fetch("/student-home",{
        //     method:"GET",

        // })
        //     .then((res)=>res.json())
        //     .then((data)=>{
        //         console.log(data,"userData")
        //         setData(data.data)
        //     })
        //     console.log(data)

        // const fetchUser=async()=>{
        //     try{
        //         const res=await axios.get('/student-home');
        //         setUser(res.data)

        //     }catch(err){
        //         console.error(err.message)
        //     }
        // }
        // fetchUser();
    // },[]);
    // const user = JSON.parse(localStorage.getItem("user"))