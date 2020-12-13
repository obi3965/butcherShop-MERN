const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const logger = require('morgan')
const cors = require('cors')

require('dotenv').config();
//initialize
const app = express()



const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')


// middleware -
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors())

//connect to database
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:false
   
}).then(() =>{
    
    console.log('Database is connected')
  })


  //routes middlewares
  app.use('/api', authRoutes)
  app.use('/api', userRoutes)
//start the server
const port =  4000;
app.listen(port, function(){

    console.log(
        'http://localhost:' + port 
      );
        
        
      
})
        
        


