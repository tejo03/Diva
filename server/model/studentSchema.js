const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const studentSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    skilla: {
        type: String
    },
    skillb:{
        type:String
    },
    skillc:{
        type:String
    },
    experience:{
        type:Number
    },
    email: {
        type: String,
        required: true
    },
    mobilenumber: {
        type: Number
    },
    
    
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]

})



// hashing the password
studentSchema.pre('save', async function (next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.confirmpassword =await bcrypt.hash(this.confirmpassword, 12);
    }
    next();
})

// generating token
studentSchema.methods.generateAuthToken = async function () {
    try {
      
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token

    }catch (err){
        console.log(err);
    }
}

const Student = mongoose.model('STUDENT', studentSchema);

module.exports = Student;