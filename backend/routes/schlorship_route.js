const express = require('express')
const router = express.Router();
const scholarship = require('../module/scholorship');
const fetchUser = require('../middleware/fetchuser');
const {body , validationResult} = require('express-validator')

// router for get the events
router.get('/getscholorship',fetchUser,async(req,res)=>{
    try{

        const scholarshipList = await scholarship.find({'c_id' : req.college.college_id})
        if(scholarshipList.length == 0)
        {
            res.json({"note" : "there is no events currentlt"})
        }
        else{
            res.json(scholarshipList)
        }
    }
    catch(error){
        res.status(400).json({'error' : error.message});
    }
})
router.get('/getAll',async(req,res)=>{
    try{
        const s = await scholarship.find({ });
        res.json(s);
    }
    catch(error){
        res.status(500).json({"error" : error.message});
    }
})
router.post('/insertscholorship',[
    body("s_name","please enter the valid event title").exists(),
    body("s_eligibility","please enter the valid contex").exists(),
    body("s_amount","please enter the valid description").isNumeric(),
    body("s_steps","please enter the valid date").exists(),
     body("s_link","please enter the valid poster url").isURL()
]
,fetchUser,async(req,res)=>{
    try{
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
             return res.status(400).json({ errors: errors.array() });
         }

         console.log(req.body.s_name);
         const scholarshipEvent = await scholarship.findOne({'s_name' : req.body.s_name});
         if(scholarshipEvent)
        {
            return res.status(400).json({"errors" : "this event  is already exitst"})
        }
        const e = await scholarship.create({
            s_name : req.body.s_name,
            s_eligibility : req.body.s_eligibility,
            s_amount : req.body.s_amount,
            s_steps : req.body.s_steps,
            s_link : req.body.s_link,
            c_id : req.college.college_id
        })
    
    
        
        
    
    res.json(e);
    }
    catch(error)
    {

    }
})

//route : for deleteing 
router.delete('/deleteEvent',fetchUser,async(req,res)=>{
    try{
        const e =  await scholarship.findByIdAndDelete({'_id' : req.body.id});
        res.json(e)
    }
    catch(error){
        res.status(400).json({'error' : error.message});
    }
})
// route : for update

router.put('/updateevent/:id',fetchUser,async(req,res)=>{
    try {
        const {s_name , s_eligibility , s_amount , s_steps , s_link} = req.body
        const nevent = {};
        if(s_name){nevent.s_name = s_name}
        if(s_eligibility){nevent.s_eligibility = s_eligibility}
        if(s_amount){nevent.s_amount = s_amount}
        if(s_steps){nevent.s_steps = s_steps}
        if(s_link){nevent.s_link = s_link}

        const scEvent = await scholarship.findById({'_id' : req.params.id})
        console.log(scEvent);
        if(!scEvent)
        {
            return res.status(500).json({"Error" : "you heve not access to update this event"})
        }
       const e =  await scholarship.findByIdAndUpdate(req.params.id,{$set: nevent} , {new : true})
       res.json(e)
    } catch (error) {
        res.status(400).json({'error' : error.message});
    }
    
})
module.exports = router