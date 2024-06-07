const user = require('../model/User')
const ageMiddleware = (req,res,next)=>{  
  console.log("middleware",req.body.age)  
    if(req.query.age>=18){
  res.status(200).send('Above 18')
    } 
    else{
 res.status(400).send('Below 18')
    } 
    next();
} 

module.exports = ageMiddleware;