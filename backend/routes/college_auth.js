const express = require('express')
const router = express.Router();
const College = require('../module/college_login');
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const {body , validationResult} = require('express-validator')

let success = false;
const jwt_secreat = 'Userisvalid'
router.post('/createCollege',[
    body('c_name','enter the valid college name ').exists(),
    body('c_email','enter the valid email-id ').isEmail(),
    body('c_ph','enter the phone no ').isMobilePhone(),
    body('c_inrf','enter the valid inrf rank ').isNumeric(),
    body('c_location','enter the valid location ').exists(),
    body('c_avg_cut','enter the valid cut-of').isNumeric(),
    body('c_student_intake','enter the valid intake details').isNumeric(),
    body('c_password','enter the valid password ').isLength(8)
],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // check whether the college is exist or note

    const college = await College.findOne({'c_name' : req.body.c_name})
    if (college)
    {
        return res.status(400).json({"errors" : "The college is already created"});
    }
    try{
        const salt = await bcrypt.genSalt(10);
        const hasspass = await bcrypt.hash(req.body.c_password,salt);

        let college = await College.create({
            c_name : req.body.c_name,
            c_email : req.body.c_email,
            c_ph : req.body.c_ph,
            c_inrf : req.body.c_inrf,
            c_location : req.body.c_location,
            c_avg_cut : req.body.c_avg_cut,
            c_student_intake : req.body.c_student_intake,
            c_clubs : req.body.c_clubs,
            c_passsword : hasspass
        })
        success = true;
    const data = {
        college : {
            college_id : college._id
        }
    }
        const authToken = jwt.sign(data,jwt_secreat)
        res.json({success, "authToken": authToken });
    }
    catch(error){
        res.status(500).json({"error" : error.message});
    }   
      
})
router.post('/college_login',[
    body('c_email','enter the valid college name').exists(),
    body('c_passsword','enter the valid password').isLength(8)
],async (req,res)=>{
    try{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const college = await College.findOne({'c_email' : req.body.c_email})
    console.log(college);
    if (!college)
    {
        return res.status(400).json({"errors" : "Please enter the valid college name and password"});
    }
    
    const checkpass = await bcrypt.compare(req.body.c_passsword,college.c_passsword)
    if (!checkpass)
    {
        return res.status(400).json({"errors" : "Enter the valid username and password"})
    }
    success = true;
    const data = {
        college : {
            college_id : college._id
        }
    }
    const authToken = jwt.sign(data,jwt_secreat)
        res.json({success, "authToken": authToken });
    }
    catch(error)
    {
        res.status(500).json({"error" : error.message});
    }
    
    
    
})
router.get('/college',[
  
],async (req,res)=>{
    
    try{
        const clg = await College.find({})
        res.json(clg);
    }
    catch(error){

    }
    
    
    
    
    
})
module.exports = router;