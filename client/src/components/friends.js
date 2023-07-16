// import React from 'react';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

// import "./App.css";

// function Friends() {
//   return (
//     <>
    
//     <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
//       <MDBContainer>
//         <MDBRow className="justify-content-center">
//           <MDBCol md="9" lg="7" xl="5" className="mt-5">
//             <MDBCard style={{ borderRadius: '15px' }}>
//               <MDBCardBody className="p-4">
//                 <div className="d-flex text-black">
//                   <div className="flex-shrink-0">
//                     <MDBCardImage
//                       style={{ width: '180px', borderRadius: '10px' }}
//                       src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
//                       alt='Generic placeholder image'
//                       fluid />
//                   </div>
//                   <div className="flex-grow-1 ms-3">
//                     <MDBCardTitle>Danny McLoan</MDBCardTitle>
//                     <MDBCardText>Senior Journalist</MDBCardText>

//                     <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
//                       style={{ backgroundColor: '#efefef' }}>
//                       <div>
//                         <p className="small text-muted mb-1">Articles</p>
//                         <p className="mb-0">41</p>
//                       </div>
//                       <div className="px-3">
//                         <p className="small text-muted mb-1">Followers</p>
//                         <p className="mb-0">976</p>
//                       </div>
//                       <div>
//                         <p className="small text-muted mb-1">Rating</p>
//                         <p className="mb-0">8.5</p>
//                       </div>
//                     </div>
//                     <div className="d-flex pt-1">
//                       <MDBBtn outline className="me-1 flex-grow-1">Chat</MDBBtn>
//                       <MDBBtn className="flex-grow-1">Follow</MDBBtn>
//                     </div>
//                   </div>
//                 </div>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </div>

//     </>
//   );
// }

// export default Friends;import React, { useEffect, useState } from 'react';import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

import React, { useState } from 'react';
import axios from 'axios';
const Friend = () => {
  const [skill, setSkill] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/friends/${skill}`);
      setUsers(response.data);
      setError('');
    } catch (error) {
      console.error(error);
      setError('An error occurred while searching for users.');
      setUsers([]);
    }
  };

  return (
    <div>
      <h2>User Search</h2>
      {/* <div>
        <label htmlFor="skill">Enter Skill:</label>
        <input type="text" id="skilla" value={skill} onChange={handleSkillChange} />
        
      </div> */}
     <div>
        <input className="form-control" style={{ width: "250px", alignItems: "center"}} type="text" id="skill" value={skill} placeholder="Enter the Skill You are Looking For" aria-label="Search" onChange={handleSkillChange} />
        <button onClick={handleSearch}>Search</button>
        </div>
    
      {error && <p>{error}</p>}
      {users.length > 0 ? (
        <div>
          {users.map((user) => (
                
                <MDBContainer style={{ width: "800px"}}>
                  <MDBRow className="justify-content-center">
                    <MDBCol md="9" lg="7" xl="5" className="mt-5">
                      <MDBCard style={{ borderRadius: '15px' }}>
                        <MDBCardBody className="p-4">
                          <div className="d-flex text-black">
                            <div className="flex-shrink-0">
                              <MDBCardImage
                                style={{ width: '180px', borderRadius: '10px' }}
                                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                                alt='Generic placeholder image'
                                fluid />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <MDBCardTitle>{user.fullname}</MDBCardTitle>
                              <MDBCardText>{user.email}</MDBCardText>
          
                              <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                style={{ backgroundColor: '#efefef' }}>
                                <div>
                                  <p className="small text-muted mb-1">Most Experienced</p>
                                  <p className="mb-0">{user.skilla}</p>
                                </div>
                                <div className="px-3">
                                  <p className="small text-muted mb-1">Fluent</p>
                                  <p className="mb-0">{user.skillb}</p>
                                </div>
                                <div>
                                  <p className="small text-muted mb-1">Good to Go</p>
                                  <p className="mb-0">{user.skillc}</p>
                                </div>
                              </div>
                              <div className="d-flex pt-1">
                                <MDBBtn outline className="me-1 flex-grow-1">Chat</MDBBtn>
                                <MDBBtn className="flex-grow-1">View Profile</MDBBtn>
                              </div>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              
          ))}
        </div>
      ) : null}
      
    </div>
  );
};

export default Friend;
