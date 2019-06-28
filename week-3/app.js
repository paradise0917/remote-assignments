const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.set("view engine","pug");

// ------------------------------------
// Assignment 1 : Your First Web Server
// ------------------------------------
app.get('/',(req,res) => {
    res.send("Hello, My Server!");
});


// ------------------------------------
// Assignment 2 : Build Backend API for Front-End
// ------------------------------------
app.get('/getData',(req,res) => {
    const num = req.query.number;
    if(num !== undefined){
        if(isPostiveInteger(num)){
            let result = caculateNum(num);
            res.send(result.toString());
        }
        else{
            res.send("Wrong Parameter");
        }
    }
    else{
        res.send("Lack of Parameter");
    }
});

//check is postive integer
function isPostiveInteger(str) {
    return /^\+?(0|[1-9]\d*)$/.test(str);
}

//caculate number
function caculateNum(num){
    let result = 0;
    for(let i = 1;i <= num;i++){
        result += i;
    }
    return result;
}

// ------------------------------------
// Assignment 3 - 1
// ------------------------------------
app.use(express.static('public'));


// ------------------------------------
// Assignment 4 : HTTP Cookie
// ------------------------------------
app.get('/myName', (req, res) => {
    const name = req.cookies.name;
    if (name) {
        res.render('show', {'name' : name.toString()});
    } else {
        res.render('index');
    }
});

app.get('/trackName', (req, res) => {
    const name = req.query.name;
    if (name !== undefined) {
        res.cookie('name', name);
        res.redirect('myName');
    } else {
        res.clearCookie('name');
        res.render('index');
    }
});


// 404 Error handle
app.use((req, res, next) => {
    const err = new Error('Not Found :( Sorry !');
    err.status = 404;
    next(err);
});

// set the server port
app.listen(3000, () =>{
    console.log("The application is running on localhost:3000.");
});