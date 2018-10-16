var express=require('express'),
	app=express(),
	port=process.env.port || 3000

app.get('/',function(req,res){
	res.send("Hello Frands, chai pilo !!");
})

app.listen(port,function(err){
	if(err)
		console.log(err)
	else
		console.log("Magic happening at port "+port)
})
