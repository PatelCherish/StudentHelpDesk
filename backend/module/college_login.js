const mongoose = require('mongoose')
const {Schema} =  mongoose

const College = new Schema({
    c_name : {
        type : String,
        require : true,
        unique : true
    },
    c_email :{
        type : String,
        require : true
    },
    c_ph : {
        type : String,
        require : true 
        
    },
    c_inrf : { 
        type : Number,
        require : true,
    },
    c_location : {
        type : String,
        require : true
    },
    c_avg_cut : { 
        type : Number,
        require : true
    },
    c_student_intake :{ 
        type : Number,
        require : true
    },
    c_clubs : {
        type : Array,
        require : true,
        default : []
    },
    c_passsword : {
        type : String,
        require : true
    }
})
module.exports = mongoose.model('college',College);