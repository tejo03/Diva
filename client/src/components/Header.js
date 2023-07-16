import React,{useState} from 'react';
import NIT_Andhra_Pradesh from './../images/NIT_Andhra_Pradesh.png';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse
  } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
const Header=()=>{
    const [showNavText, setShowNavText] = useState(false);
    return (
        <>
        <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Diva</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='http://localhost:3000/empower'>Empower With us</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <a  href='http://localhost:3000/student-login'> login </a>
          <a href='http://localhost:3000/student-register' style={{paddingLeft:"50px"}}> Register </a>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
        </>
    );

}
export default Header;
