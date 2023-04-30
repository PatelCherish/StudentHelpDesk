const express = require('express')
const router = express.Router();
const events = require('../module/event_schema');
const fetchUser = require('../middleware/fetchuser');
const {body , validationResult} = require('express-validator')

// router for get the events
router.get('/getevent',fetchUser,async(req,res)=>{
    try{
        const event_list = await events.find({'c_id' : req.college.college_id})
        if(event_list.length == 0)
        {
            res.json({"note" : "there is no events currentlt"})
            
        }
        else{
            res.json(event_list)
        }
    }
    catch(error){
        res.status(400).json({'error' : error.message});
    }
})
router.get('/getallevent',async(req,res)=>{
    try{
        const event_list = await events.find({})
        console.log(event_list);
        if(event_list.length == 0)
        {
            res.json({"note" : "there is no events currentlt"})
            
        }
        else{
            res.json(event_list)
        }
    }
    catch(error){
        res.status(400).json({'error' : error.message});
    }
})
router.post('/insertEvent',[
    body('e_title','please enter the valid event title').exists(),
    body('e_context','please enter the valid contex').exists(),
    body('e_desc','please enter the valid description').exists(),
    body('e_date','please enter the valid date').isDate(),
    body('e_poster','please enter the valid poster url').exists(),
],fetchUser,async(req,res)=>{
    try{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // check wheter the event is exits or not
    const event = await events.findOne({'e_title' : req.body.e_title});
    if(event)
    {
        return res.status(400).json({"errors" : "this event  is already exitst"})
    }
    const e = await events.create({
        e_title : req.body.e_title,
        e_context : req.body.e_context,
        e_desc : req.body.e_desc,
        e_date : req.body.e_date,
        e_poster : req.body.e_poster,
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
        const e =  await events.findByIdAndDelete({'_id' : req.body.id});
        res.json(e)
    }
    catch(error){
        res.status(400).json({'error' : error.message});
    }
})
// route : for update

router.put('/updateevent/:id',fetchUser,async(req,res)=>{
    try {
        const {e_title , e_context , e_desc , e_date , e_poster} = req.body
        const nevent = {};
        if(e_title){nevent.e_title = e_title}
        if(e_context){nevent.e_context = e_context}
        if(e_desc){nevent.e_desc = e_desc}
        if(e_date){nevent.e_date = e_date}
        if(e_poster){nevent.e_poster = e_poster}

        const event = await events.findById({'_id' : req.params.id})
        console.log(event);
        if(!event)
        {
            return res.status(500).json({"Error" : "you heve not access to update this event"})
        }
       const e =  await events.findByIdAndUpdate(req.params.id,{$set: nevent} , {new : true})
       res.json(e)
    } catch (error) {
        res.status(400).json({'error' : error.message});
    }
    
})
module.exports = router