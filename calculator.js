const express=require("express");

const bodyParser=require("body-parser");
const app =express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var result=n1+n2;
    res.send("result is" +result);


});


app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
    var hi=parseFloat(req.body.height);
    var we=parseFloat(req.body.weight);
    var bmi=we/(hi*hi);
    res.send("bmi is"+bmi);
    
});




app.listen(4000,function(){
    console.log("server 3000");
});


