const express = require('express')
const router = express.Router();
const Placement = require('../module/placement');
const fetchUser = require('../middleware/fetchuser');
const {body , validationResult} = require('express-validator');
const placement = require('../module/placement');

router.get('/getp',fetchUser,async(req,res)=>{
        try{
            res.send("hello");
        }
        catch(error){
            res.send({"error" : "error"});
        }
})

router.get('/getallplacement',async(req,res)=>{
    try {
        const p = await placement.find({ });
        res.json(p);
    }
    catch(error){
            res.status(500).json({"error" : error.message})
    }
})

router.post('/insertplace',[
    body('p_year','please enter the valid year').exists(),
    body('h_package','please enter the valid highest package details').isNumeric(),
    body('l_package','please enter the valid lowest package details').isNumeric(),
    body('n_student_p','please enter the no of the sudent part in placement').isNumeric(),
    body('n_student_g','please enter the number of the student get the placement').isNumeric(),
    body('p_t_company','please enter the list of the company details').exists()
],fetchUser,async(req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        const place = await Placement.create({
            p_year : req.body.p_year,
            h_package : req.body.h_package,
            l_package : req.body.l_package,
            n_student_p : req.body.n_student_p,
            n_student_g : req.body.n_student_g,
            p_t_company : req.body.p_t_company,
            c_id : req.college.college_id
        })
        res.json(place)
    }
    catch(error){
        res.status(500).json({'error' : error.message})
    }
})
router.delete('/deleteplacement/:id',fetchUser,async(req,res)=>{
    try{
        const e =  await Placement.findByIdAndDelete({'_id' : req.params.id});
        res.json(e)
    }
    catch(error){
        res.status(400).json({'error' : error.message});
    }
})
router.put('/updateplacement/:id',fetchUser,async(req,res)=>{
    try{
        const {p_year , h_package , l_package , n_student_p , n_student_g , p_t_company} = req.body
        const nevent = {};
        if(p_year){nevent.p_year = p_year}
        if(h_package){nevent.h_package = h_package}
        if(l_package){nevent.l_package = l_package}
        if(n_student_p){nevent.n_student_p = n_student_p}
        if(n_student_g){nevent.n_student_g = n_student_g}
        if(p_t_company){nevent.n_student_g = p_t_company}
        const placement = await Placement.findById({'_id' : req.params.id})
        
        if(!placement)
        {
            return res.status(500).json({"Error" : "you heve not access to update this event"})
        }
       const e =  await Placement.findByIdAndUpdate(req.params.id,{$set: nevent} , {new : true})
       res.json(e)
        
    }
    catch(error){
        res.status(400).json({'error' : error.message});
    }
})
module.exports = router
