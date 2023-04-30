const mongoose = require('mongoose')
const {Schema} =  mongoose

const Events = new Schema({
    e_title : {
        type : String,
        require : true,
    },
    e_context : {
        type : String,
        require : true,
    },
    e_desc : {
        type : String,
        require : true,
    },
    e_date : {
        type : Date,
        require : true,
    },
    e_poster :{
    
        type  : String,
        require : true
    },
    c_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'colleges'
    }
})
module.exports = mongoose.model('events',Events);
