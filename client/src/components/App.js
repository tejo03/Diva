import React from 'react';
import './App.css';

import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Friend from './friends';
import Header from "./Header";
import Home from "./Home";
import Medium from './medium';
import Login from './Login';
import RegistrationForm from './registration';
import Medium_reg from './Medium_reg';
import LoginForm from './student_login';
import Empower from './empower';
import StudentHome from './student_home';
import EditStudentprofile from './editStudentProfile';

// import Errorpage from './Errorpage'

function App() {
 
  return (
    
    // <div >
    //   <Header />
    //   <Footer />
     
    // </div>
    <Router>
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/friends" element={<Friend/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/login" element={<Medium/>}/>
        <Route path="/empower" element={<Empower/>}/>
        <Route path="/medium_reg" element={<Medium_reg/>}/>
        <Route path="/student-register" element={<RegistrationForm/>}/>
        <Route path="/student-login" element={<LoginForm/>}/>
        <Route path="/student-home" element={<StudentHome/>}/>
        <Route path="/edit-student-profile" element={<EditStudentprofile/>}/>
      </Routes>
    </Router>
  );
}

export default App;

// export default App;
