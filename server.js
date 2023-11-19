const express = require("express") 
const app=express(); 
let mongoose=require("mongoose"); 
let bodyParser=require("body-parser"); 
let Form=require("./index.js"); 
mongoose.connect("./index.js/",{ 
	useNewUrlParser: true, 
	useUnifiedTopology: true
}); 
app.set('view engine','ejs'); 
app.use(bodyParser.urlencoded({extended:true})); 
app.get("/",function(req,res){ 
	res.render("form"); 
});
app.get('/result',(req,res)=>{ 
	res.render('result'); 
}); 
app.post("/",function(req,res){ 
	let username=req.body.username; 
	let email=req.body.email; 
	let f={username: username,email:email}; 
	Form.create(f,function(err,newlyCreatedForm){ 
		if(err) 
		{ 
			console.log(err); 
		}else{ 
			res.redirect("/result"); 
		} 
	}); 
}); 
app.listen(3000, function() { 
	console.log('Server running on port 3000'); 
}); 