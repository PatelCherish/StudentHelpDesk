var jwt = require('jsonwebtoken');
const jwt_secreat = 'Userisvalid'

const fetchUser = (req,res,next)=>{
    // get the user from the jwt token and add the user id th response
    const token = req.header('auth-token');
    if(!token)
    {
        res.this.state(401).send({'error' : 'please authenticate the valid user'});
    }
    try {
        const data = jwt.verify(token,jwt_secreat);
        req.college = data.college;
        console.log(data.college);
        next();    
    } catch (error) {
        console.log(error.message);
        res.this.state(401).send({'error' : 'please authenticate the valid user'});
    }
    
}
module.exports = fetchUser;