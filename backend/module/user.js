const mongoose = require('mongoose')
const {Schema} =  mongoose

const User =  new Schema({
    e_name : {
        type : String,
        require : true,
        unique : true,
    },
    e_email : {
        type : String,
        require : true,
    },
    e_ph : {
        type : String,
        require : true
    },
    e_school :{
        type : String,
        require : true,
    },
    e_state :{
        type : String,
        require : true
    },
    e_result : {
        type : Number,
        require : true
    },
    e_branch : {
        type : String,
        require : true
    },
    e_password : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model('users',User);