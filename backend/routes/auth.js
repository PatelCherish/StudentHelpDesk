const express = require('express')
const router = express.Router();
const User = require('../module/user');
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const {body , validationResult} = require('express-validator');
const fetchUser = require('../middleware/fetchuser');
const fetchu = require('../middleware/fetchu');


let success = false;
const jwt_secreat = 'Userisvalid'
// router 1 :  sign-up
router.post('/createUser',[
    body('e_name','enter the valid user name').exists(),
    body('e_email','enter the valid email id').isEmail(),
    body('e_ph','enter the valid phone number').isMobilePhone(),
    body('e_school','enter the valid school name').exists(),
    body('e_state','enter the valid state').exists(),
    body('e_result','enter the valid result').isNumeric(),
    body('e_branch','select valid branch name').exists(),
    body('e_password','enter the valid password').isLength(8)
], async (req,res)=>{  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // check whether email is exitst or not
    const user = await User.findOne({'e_email' : req.body.e_email});
    
    if(user)
    {
        return res.status(400).json({"errors" : "this email  is already exitst"})
    }
    // create the bycrpted password
    try{
    const salt = await bcrypt.genSalt(10);
    const hasspass = await bcrypt.hash(req.body.e_password,salt);
    
    let user_create = await User.create ({
        e_name : req.body.e_name,
        e_email : req.body.e_email,
        e_ph : req.body.e_ph,
        e_school : req.body.e_school,
        e_state : req.body.e_school,
        e_result : req.body.e_result,
        e_branch : req.body.e_branch,
        e_password : hasspass
    })
    const data  = {
        user : {
            user_id : user_create._id
        }
    }
    success = true;
    const authToken = jwt.sign(data,jwt_secreat)
        res.json({success ,"authToken": authToken });
    }
    catch(error){
        res.status(400).json({'error' : error.message});
    }
    
})
router.post('/login',[
    body('e_email','enter the valid email id').isEmail(),
    body('e_password','enter the valid password').isLength(8)
],async( req , res)=>{
    try{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const user = await User.findOne({'e_email' : req.body.e_email})
    if(!user)
    {
        return res.status(400).json({"errors" : "Enter the valid username and password"})
    }
    
    const checkpass = await bcrypt.compare(req.body.e_password,user.e_password)
    if (!checkpass)
    {
        return res.status(400).json({"errors" : "Enter the valid username and password"})
    }
    success = true;
    const data = {
        user : {
            user_id : user._id
        }
    }
    const authToken = jwt.sign(data,jwt_secreat)
        res.json({success, "authToken": authToken });
    
    }
    catch(error){
        res.status(500).json({"error" : error.message});
    }
    
})
router.get('/getuser',fetchu,async(req,res)=>{
    try{
        const user = await User.findOne({'_id' : req.user.user_id})
        res(user)
    }
    catch(error)
    {

    }
})
module.exports = router;