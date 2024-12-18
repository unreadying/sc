var min = document.getElementById("min");
var max = document.getElementById("max");
var menubutton = document.getElementById("menubutton");
var x = document.getElementById("x");
var page = document.getElementById("content");
var menu = false;

menubutton.onclick=menutog;
menubutton.setAttribute('aria-expanded',menu);
x.onclick=menutog;

function menutog(){
    console.log("toggle");
    if(menu==false){
        min.style.visibility="hidden";
        max.style.display="block";
        page.style.opacity="0";
    }else{
        min.style.visibility="visible";
        max.style.display="none";
        page.style.opacity="1";
    }
	menu=!menu;
	menubutton.setAttribute('aria-expanded',menu);
}
