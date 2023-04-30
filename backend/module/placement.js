const mongoose = require('mongoose')
const {Schema} =  mongoose

const Placement = new Schema({
    p_year : {
        type : String,
        require : true,
    },
    h_package : {
        type : Number,
        require : true,
    },
    l_package : {
        type : Number,
        require : true,
    },
    n_student_p : {
        type : Number,
        require : true,
    },
    n_student_g :{
        type : Number,
        require : true
    },
    p_t_company : 
    {
        type : Array,
        require : true
    },
    c_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'colleges'
    }
})
module.exports = mongoose.model('placement',Placement);
