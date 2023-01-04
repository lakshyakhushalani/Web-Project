const express=require('express');
const path=require('path');
const hbs=require("hbs");
const app=express();
const port=process.env.port || 3000;



//static path
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"templates/views");
const partial_path=path.join(__dirname,"templates/partials");

//for using partials
app.set("views",template_path);
hbs.registerPartials(partial_path);

//middleware
app.use(express.static(static_path));

app.set("view engine","hbs");

//Routing
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("404",{messege:"OOPS! Page Not Found"});
})

app.listen(port,(err)=>{
    console.log(`server is listening to the port ${port}`)
})


