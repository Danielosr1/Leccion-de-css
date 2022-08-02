

function redireccion(){
    
    

var c=2468;
var u="daniel@gmail.com";

if(document.getElementById('password').value== c && document.getElementById('login').value== u){
alert("Bienvenido a Facebook");
window.location="facebook.html";
}
else{
alert("Porfavor ingresa nombre y usuario correcto");
}

}