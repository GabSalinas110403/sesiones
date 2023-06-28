var express=require("express");
var path=require("path");
var session=require("express-session");
var usuariosRutas=require("./rutas/usuarios");
require("dotenv").config();

var app=express();
app.set("view engine", "ejs");
app.use("/web", express.static(path.join(__dirname, "/web"))); 
app.use(express.urlencoded({extended:true})); //para los formularios



// configuracion de session
app.use(session({
    secret: process.env.SECRETO_SESSIONS,
    resave:true,
    saveUninitialized:true,
}));

app.use("/", usuariosRutas);

// llama al servidor
var port=process.env.port || 3000;

app.listen(port, ()=>{
    console.log(`Servidor en http://localhost:${port}`)
});