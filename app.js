const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex' //url conctn to invoke mongodb cnctn

const app = express()  //start of express frmwrk

mongoose.connect(url, {useNewUrlParser:true}) // to connect with mongodb and parser is used to avoid warnings
const con = mongoose.connection  //just to hold the connection 

con.on('open', () => {   //fire an event to know conctn status
    console.log('connected...')
})
app.post('/doboperations',(req,res) =>{
    console.log('request executed',req)
    res.send({"status code":200})
    
})


app.use(express.json())// recognize the request as json object/format      converts

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)  //Mdlwr w.r.t router-aliens file

app.listen(3000, () => {
    console.log('Server started')
})