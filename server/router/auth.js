const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Visitor = require('../model/visitorSchema');
// const socketIO = require('socket.io');
const Security = require('../model/securitySchema');
const cors = require("cors")
const authenticate=require("../middleware/authenticate")
router.use(cors())
router.get("/",cors(),(req,res)=>{

})

require('../db/conn');
const Student = require('../model/studentSchema');

router.get('/', (req,res) => {
    res.send("Hello from server router.js..");
});

// Async-Await
router.post('/student-register', async (req, res) => {

    const { fullname, username, password, confirmpassword,email } = req.body;

    if(!fullname || !username || !password || !confirmpassword || !email  ){
        return res.status(400).json({ error: "Please fill all the fields..."})
    }

    try {
        const userExist = await Student.findOne({ username: username, email:email })

        if(userExist){
            return res.status(400).json({ error: "User already exist..."})
        } else if (password != confirmpassword) {
            return res.status(400).json({ error: "Passwords are not matching..."})
        } else {
            const student = new Student({ fullname, username, password, confirmpassword, email });


        
            const studentRegister = await student.save();
    
            if (studentRegister) {
                res.status(201).json({ message: "Student registered successfully..." })
            } else {
                res.status(500).json({ error: "Failed to register..." })
            }
        }

        
    }catch(err) {
        console.log(err);
    }
    
    
});


// login route
// router.get("/friends",async(req,res)=>{
//     const search=req.query.search ||"";
//     let sort=req.query.sort || "experience";
//     let category=req.query.category ||"All";
//     const categoryOptions=["TejoManasa","asdf"];
//     category==="All"?(category=[...categoryOptions]):(category=req.query.category.split(","));
//     const details=await Student.find({username:{$regex:search,$options:"i"}})
//     .$where("category").in([...category])

// })
router.get('/friends/:skill', async (req, res) => {
    try {
      const skill = req.params.skill;
  
      // Fetch users who have the specified skill
      const users = await Student.find({ $or: [{ skilla: skill }, { skillb: skill },{ skillc: skill }] });
  
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  });

router.post('/student-login', async (req, res) => {
    try {
      let token;
      const { username, password } = req.body

      if(!username || !password){
        return res.status(400).json({ error: "Please fill allthe details..." })
      }

      const studentLogin = await Student.findOne({username: username})

    //   console.log(studentLogin);
      

      
      if(!studentLogin) {
        res.status(400).json({ error: "User not found..." })
      }else {
        const isMatch = await bcrypt.compare(password, studentLogin.password);

        token = await studentLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken", token, {
            expires:new Date(Date.now() + 2592000000),
            httpOnly:true
        });

        if(!isMatch){
            res.status(400).json({ error: "Invalid Password..." })
          }else {
            const {password,confirmpassword,...newD} = studentLogin._doc
            res.json(newD)
            res.json({ message: "Security Login successful..." })
            
          }
      }

      

    }catch(err) {
        console.log(err);
    }
    
})


router.put('/edit-student-profile/:id', async (req, res) => {
    const id = req.params.id;
    const { mobilenumber, skilla, skillb, skillc, experience } = req.body;
    console.log(id)
    try {
      const updatedStudent = await Student.findByIdAndUpdate(
        id,
        { mobilenumber, skilla, skillb, skillc, experience },
        { new: true } // To get the updated document as the result
      );
  
      if (!updatedStudent) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      res.json(updatedStudent);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
 

module.exports = router;