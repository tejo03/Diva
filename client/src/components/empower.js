import React from 'react'
import {Link} from "react-router-dom";
import Header from './Header';
import Medium from './medium';
import Footer from './Footer';

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function Empower() {
  return (
    <>
    <Header/>
    <div className="vh-100" style={{ backgroundColor: '#eee' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px', backgroundColor: '#93e2bb' }}>
              <MDBCardBody className="p-4 text-black">
                
              <MDBCardText>ANITA</MDBCardText>
                <div>
                  <MDBTypography tag='h6'>Life is an unpredictable journey filled with ups and downs. It is during challenging times that we witness the true strength of individuals. In this essay, we delve into a real-life situation of an individual who faced overwhelming adversity but emerged victorious through resilience, determination, and unwavering spirit.</MDBTypography>
                </div>
                
                  
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px', backgroundColor: '#93e2bb' }}>
              <MDBCardBody className="p-4 text-black">
                <div>
                <MDBCardText>AVANTIKA</MDBCardText>
                  <MDBTypography tag='h6'>In the male-dominated field she chose to study, Sarah faced gender bias and skepticism from her peers and professors. Nevertheless, she turned these obstacles into motivation, proving her capabilities through hard work and determination. Sarah actively participated in class, sought mentorship from successful women in her field, and gradually gained the respect and recognition she deserved.</MDBTypography>
                </div>
                
                  
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px', backgroundColor: '#93e2bb' }}>
              <MDBCardBody className="p-4 text-black">
                <div>
                <MDBCardText>Bhanu</MDBCardText>
                  <MDBTypography tag='h6'>In the male-dominated field she chose to study, Sarah faced gender bias and skepticism from her peers and professors. Nevertheless, she turned these obstacles into motivation, proving her capabilities through hard work and determination. Sarah actively participated in class, sought mentorship from successful women in her field, and gradually gained the respect and recognition she deserved.</MDBTypography>
                </div>
                
                  
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </>
  );
}
