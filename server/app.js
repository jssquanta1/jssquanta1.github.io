const express=require("express")
const app = express()
const PORT=9000
const mongoose=require("mongoose")
const {MONGOURI}=require("./keys")

mongoose.connect(MONGOURI)
mongoose.connection.on("connected",()=>{
    console.log("connected to mongodb")
})
mongoose.connection.on("error",(err)=>{
    console.log("error while connectin to mongodb",err)
})


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})

