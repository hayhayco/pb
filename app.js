var express     = require("express"),
    bodyParser  = require("body-parser"),
    mongoose    = require('mongoose'),
    method      = require("method-override"),
    app         = express();

    //middleware
    app.use(method("_method"));// dipakai untuk di URL sebagai direksi edit delete
    app.use(bodyParser.urlencoded({extended:true})); //baca HTML POST GET
    app.use(express.static("public"));//untuk menambah direktori css img js
    app.set("view engine", "ejs");//untuk merender html folder views

    //mongoose.connect('mongodb://localhost/pb')
    mongoose.connect('mongodb://world:123456@ds157621.mlab.com:57621/node_exercise');

    app.get("/",function(req,res){//untuk redirect pada saat masukin localhost 3000 ke /world
        res.redirect("/me")
    });
    app.get("/me", function(req,res){
        res.render("index")
    });

    app.listen(process.env.PORT||3000, function(){ //process.env.PORT digunakan untuk diserver dan 3000 untuk di local
      console.log("Server Starting");
    });
