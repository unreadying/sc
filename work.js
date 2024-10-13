
var workn=0;
var pworkn=0;
var min = document.getElementById("min");
var max = document.getElementById("max");
var menubutton = document.getElementById("menubutton");
var x = document.getElementById("x");
var page = document.getElementById("content");
var menu = false;

menubutton.onclick=menutog;
x.onclick=menutog;

function menutog(){
    console.log("toggle");
    if(menu==false){
        min.style.visibility="hidden";
        max.style.display="block";
        page.style.opacity="0";
        menu=!menu;
    }else{
        min.style.visibility="visible";
        min.style.display="block";
        max.style.display="none";
        page.style.opacity="1";
        menu=!menu;
    }
}


function hide(event){
    var img=document.getElementById(event.target.id);

    img.style.display="none";
}

function prod(){
	document.getElementById("prodbody").style.display="block";
	document.getElementById("ocbody").style.display="none";
	
	document.getElementById("prodscrollpoint").scrollIntoView();
}

function oc(){
	document.getElementById("ocbody").style.display="block";
	document.getElementById("prodbody").style.display="none";
	
	document.getElementById("ocscrollpoint").scrollIntoView();
}

function newwork(event){
	
	
 
    if(typeof(event.target.id)=="string"){
    workn = event.target.id;
    }



    workn = Number(workn);
    pworkn = workn;

    console.log(workn);
	
	if(event.target.title=="OVO"){
		document.getElementById("brandwork").style.display="block"
	}else{
	document.getElementById("brandwork").style.display="none"

	}
	document.getElementById("workp").innerHTML=event.target.title;
	
	document.querySelector(".workgal").style.display="inline-block";
    document.getElementById("worki1").style.display="inline";
    document.getElementById("worki2").style.display="inline";
    document.getElementById("worki3").style.display="inline";
    document.getElementById("worki4").style.display="inline";
    document.getElementById("worki5").style.display="inline";
    document.getElementById("worki6").style.display="inline";

    
    document.getElementById("worki1").src="work/"+workn+".jpg";
    document.getElementById("worki2").src="work/"+workn+".1.jpg";
    document.getElementById("worki3").src="work/"+workn+".2.jpg";
    document.getElementById("worki4").src="work/"+workn+".3.jpg";
    document.getElementById("worki5").src="work/"+workn+".4.jpg";
    document.getElementById("worki6").src="work/"+workn+".5.jpg";

}

function scrollto(){
		document.getElementById("scrollpoint").scrollIntoView();
}