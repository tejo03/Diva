import React from 'react'
import {Link} from "react-router-dom";
import Header from './Header';
import Medium from './medium';
import { useState,useRef } from 'react';
const Login=() =>{
    const [val,setval]=useState("");
    const tab=useRef("");
    function printing(){
        var o=document.getElementById("idk").value
        // setval(o);
        // tab.insertrow({val})
        // setval(tab)
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    let testEmails = ["notanemail.com", "workingexample@email.com", "another_working@somethingelse.org", "notworking@1.com"];

testEmails.forEach((address) => {
    console.log(regex.test(address))
});

        
    }
    
    return (
        <div>
            <h1>afas</h1>
            <select id="idk" onChange={printing}>
            <option value="Orange">Orange</option>
            <option value="Radish">Radish</option>
            <option value="Cherry">Cherry</option>
            </select>
            <table ref={tab}>
                <tr><td>{val}</td></tr>
                </table>
        </div>
            
        
        

        
    );
}
export default Login;
