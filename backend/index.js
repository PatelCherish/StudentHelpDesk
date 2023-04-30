const connectToMongo = require('./db')
const express = require('express');
var cors = require('cors')
const app = express();

connectToMongo();
app.use(cors());

app.use(express.json())
app.use('/api/auth',require('./routes/auth'));
app.use('/api/clg-auth',require('./routes/college_auth'));
app.use('/api/events',require('./routes/events'));
app.use('/api/placement',require('./routes/Placement'));
app.use('/api/scholorship',require('./routes/schlorship_route'));
const port = 5000;

app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`);
})