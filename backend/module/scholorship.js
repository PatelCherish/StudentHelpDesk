const mongoose = require('mongoose')
const {Schema} =  mongoose

const Student_scholorship = new Schema({
    s_name : {
        type : String,
        require : true
    },
    s_eligibility : {
        type : String,
        require : true
    },
    s_amount : {
        type : Number,
        require : true
    },
    s_steps : {
        type : String,
        require : true
    },
    s_link :{
        type : String,
        require : true
    },
    c_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'colleges'
    }
})
module.exports = mongoose.model('scholorship',Student_scholorship)