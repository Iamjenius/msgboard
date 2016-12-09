// node 預設模組
var path = require('path');
var firebase = require("firebase");
var config = firebase.initializeApp({
    apiKey: "AIzaSyABPXDQF82jb6fl7zjAWyFYXZpWM1kijNs",
    authDomain: "webproject-1cc46.firebaseapp.com",
    databaseURL: "https://webproject-1cc46.firebaseio.com",
    storageBucket: "webproject-1cc46.appspot.com",
    messagingSenderId: "901093485324"
 });

// NPM 模組
var express = require('express');  
var app = express();
var partials = require('express-partials');
var static = require('serve-static');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');    

// parse application/x-www-form-urlencoded 
// 讓回傳的值可以解析 json與 urlencoded
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true}));

// 版型設定
app.use(partials());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//設定預設指定目錄
app.use( static( path.join( __dirname, 'public' )));

//預設favicon.ico位置
app.use(favicon(__dirname + '/public/favicon.ico'));

//路徑設定，有get與post指令
app.get('/', function(req, res){
	var db = firebase.database();
	res.render('index')});

//偵測3000 port
http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});

console.log('open');