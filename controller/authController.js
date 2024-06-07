const User = require('../model/User') 
const multer  = require('multer') 

  exports.register = async(req,res)=>{
    try{
      console.log(req.body);

      //const {Image}=req.file.path;
      //console.log(name,email,age)  
      const User1 = new User({ 
       name: req.body.name,
       email: req.body.Email,
       age: req.body.age
     }); 
     await User1.save();
     res.status(200).send({message:'user registered'})
    } 
    catch(error){
      console.log(error) 
    }

  

}

exports.fetchUser = (req,res)=>{
const {userId} = req.params.userId;
const userdetail = User.findById({userId}); 
res.send(userdetail)
}
 