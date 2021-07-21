const express = require('express');
const Arouter = express.Router()
const mongoose = require('mongoose')

const schema = mongoose.Schema

const Adminuserschema = new schema({
    username : String,
    email : String ,
    usertype : String,
})

const Ausermodel = mongoose.model('users',Adminuserschema);

Arouter.get('/test' , (req,res)=>{
    res.end('Hello')
})

Arouter.get('/getbuyers' , (req,res)=>{
    Ausermodel.find({usertype:"buyer"} , function(docs,err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})

Arouter.get('/getsellers' , (req,res)=>{
    Ausermodel.find({usertype:"seller"} , function(docs,err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})

Arouter.get('/getcompanies' , (req,res)=>{
    Ausermodel.find({usertype:"company"} , function(docs,err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})

module.exports = Arouter