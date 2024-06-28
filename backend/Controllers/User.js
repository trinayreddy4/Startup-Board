const validator = require('validator');
const bcrypt = require('bcrypt');
const User = require('../Models/User');
const LenValidation = require('../Helpers/Validation');
const register = async (req,res)=>{
    console.log(req.body);
    const {
        first_name,
        last_name,
        email,
        username,
        password,
        gender,
        bday,
        bmonth,
        byear
    } = req.body;


    if(!validator.isEmail(email)){
        return res.status(400).send("Invalid Email Address");
    }

    if(!LenValidation(first_name,3,20)){
        {
            return res.status(400).send("First Name Length Should be between 3 and 20");
        }
    }

    if(!LenValidation(last_name,3,20)){
        return res.status(400).send("Last Name Length Should be between 3 and 20");
    }

    if(!LenValidation(password,6,20)){
        return res.status(400).send("Password Length Should be between 6 and 20");
    }

    const updpassword = await bcrypt.hash(password,10);
    try{
    const prevUser = await User.findOne({email});
    if(prevUser){
        return res.status(400).send("Email Account Already Exists");
    }
    const user = await new User({
        first_name,
        last_name,
        email,
        username,
        password:updpassword,
        gender,
        bday,
        bmonth,
        byear
    }).save();
    console.log(user);
    res.status(200).send(user);
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            error:err.message
        })
    }

};

module.exports=register;