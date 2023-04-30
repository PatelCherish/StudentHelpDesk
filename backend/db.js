var mongoose = require('mongoose');


const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect("mongodb+srv://amansevak1234:Q6hlelND20EhFTC7@cluster0.uqiyie6.mongodb.net/?retryWrites=true&w=majority");
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}


module.exports = connectToMongo;
