const express=require("express");
const app=express();
const path= require("path");
const port=8080;
    
app.set("view engine", "ejs" );
app.set("views",path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port, ()=>{
    console.log("listening!");
});

app.get("/", (req,res)=>{
    res.render("home.ejs");
})

app.get("/ml-analysis", async (req,res)=>{
    res.render("index.ejs");
})

app.get('/incentives', (req, res) => {
    res.render('incentives');
});

app.get("/estimate", (req,res)=>{
    res.render("calculations.ejs");
})

app.get("/about", (req,res)=>{
    res.render("about.ejs");
})
