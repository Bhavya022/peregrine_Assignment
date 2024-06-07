const express = require('express') 
const app = express() 
const connectDB = require('./config/db')  
const authRoutes = require('./route/authRoutes') 
const AgeMiddleware = require('./middleware/AgeMiddleware')


app.get('/',(req,res)=>{
    res.send('welcome')
})
app.use('/api',authRoutes);

app.listen(5000,()=>{ 
    connectDB();
    console.log('server and db connected')
})