const express=require('express')
const app=express()
const {ConnectToDb,getDb} =require('./Index')

let db
ConnectToDb((err)=>{
        if(!err){
            app.listen(3000,()=>{
                console.log('app 3000')
            })
            db=getDb
        }
})

