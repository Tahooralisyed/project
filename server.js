var express=require("express");
var app=express();
var bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(express.static(__dirname+"/../MiniProject_1"));
app.get('/',function (request,response) {
    response.redirect('/index.html');
});
app.post('/api/login',function (request,response) {
    var uname=request.body.u_name;
    var upwd=request.body.u_pwd;
    if(uname=='admin'&&upwd=='admin'){
        response.send({login:'success'});
    }else {
        response.send({login:'Failure'});
    }
});
app.listen(5000);
console.log('server listning the port no.5000');
