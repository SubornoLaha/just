const express=require("express")
const bodyParser=require('body-parser')
const { urlencoded } = require("body-parser")
const app=express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
        res.sendFile(__dirname+"/index.html")
        console.log(__dirname)
})

app.post("/",(req,res)=>{
       const password=req.body.psswrd
       if(password==11){
        res.sendFile(__dirname+'/views/main.html')
       }
})


app.post("/love",function(req,res){
        res.send("Thank you")
})

app.post("/hate",(req,res)=>{
        res.send("Thank you for your hate!")
})

app.listen(3000,()=>{
        console.log("server is running at port 3000!")
})