const User = require('../model/User');
const multer = require('multer');


exports.register = async (req, res) => {
    try {
        

            console.log(req.body);

            //const {Image}=req.file.path;
            //console.log(name,email,age)  

            const User1 = new User({ 
                name: req.body.name,
                Email: req.body.Email, 
                age: req.body.age
            }); 

            await User1.save();
            res.status(200).send({ message: 'user registered' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Internal server error' });
    }
};

exports.fetchUser = async (req, res) => {
    try {
        const { userId } = req.params; 
        const userDetail = await User.findById(userId); 

        if (!userDetail) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send(userDetail);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Internal server error' });
    }
};
