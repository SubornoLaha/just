const express=require("express")
const bodyParser=require("body-parser")
const app=express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
   res.sendFile(__dirname+"/main.html")
})


//add route
app.get("/addition",function(req,res){
        res.sendFile(__dirname+"/add.html")
})

app.post("/add",function(req,res){
        var num1=Number(req.body.num1)
        var num2=Number(req.body.num2)
        var result=num1+num2
        res.send("your addition is "+result)
})


//subs route
app.get("/substraction",function(req,res){
        res.sendFile(__dirname+"/subs.html")
})

app.post("/subs",function(req,res){
        var num1=Number(req.body.num1)
        var num2=Number(req.body.num2)
        var result=num1-num2
        res.send("your substraction is "+result)
})


//multi route
app.get("/multiplication",function(req,res){
        res.sendFile(__dirname+"/multi.html")
})

app.post("/multi",function(req,res){
        var num1=Number(req.body.num1)
        var num2=Number(req.body.num2)
        var result=num1*num2
        res.send("your multiplication is "+result)
})


//divide route
app.get("/divide",function(req,res){
        res.sendFile(__dirname+"/divide.html")
})

app.post("/divide",function(req,res){
        var num1=Number(req.body.num1)
        var num2=Number(req.body.num2)
        var result=num1/num2
        res.send("your divide is "+result)
})


app.listen(3000,function(){
        console.log("server running t port 3000")
})