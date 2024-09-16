const totalcars = 8;

var min = document.getElementById("min");
var max = document.getElementById("max");
var menubutton = document.getElementById("menubutton");
var x = document.getElementById("x");
var page = document.getElementById("content");
var menu = false;
var car = 1;
var changes = 0;
var maxchanges = 0;
var pcar = 0;

menubutton.onclick=menutog;
x.onclick=menutog;


document.addEventListener("keydown",navigate)

function navigate(){
    if(event.key=="ArrowLeft"){
        previmg();
    }
    if(event.key=="ArrowRight"){
        nextimg();
    }
    if(event.key=="Escape"){
        closegal();
    }
}

function imgsel(){
        var selectedimg=event.target.id

        selectedimg = Number(selectedimg.replace(/\D/g, ""));

        for(j=0;j<selectedimg;j++){
            nextimg();
        }

        
}


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

function hide(){
    var img=document.getElementById(event.target.id);

    img.style.display="none";
}

function changefinder(){
    for(i=0;i<8;i++){
        if(document.getElementById("gt"+(i+1)+"").style.display=="none"){
            maxchanges=i;
            return;
        }
    }
}

function nextimg(){


    changefinder();
    


    changes+=1;

    if(changes>maxchanges){
        changes=0;
    }


    for(i=0;i<=maxchanges;i++){
        var c = i+changes;
        if(c>maxchanges){
            c-=maxchanges+1;
        }
        document.getElementById("gt"+(i)+"").src="fleet/"+(car+(Math.round(c*10)/100))+".jpg";
    }
}

function previmg(){


    changefinder();
    
    
    
    changes-=1;

    if(changes<0){
        changes=maxchanges;
    }


    for(i=0;i<=maxchanges;i++){
        var c = i+changes;
        if(c>maxchanges){
            c-=maxchanges+1;
        }
        document.getElementById("gt"+(i)+"").src="fleet/"+(car+(Math.round(c*10)/100))+".jpg";
    }
    
}

document.getElementById("screen").onclick=closegal;

function opengal(){
    changes=0;
    car = event.target.name;



    car = Number(car);
    pcar = car;

    document.getElementById("galtitle").innerHTML=event.target.title;

    document.getElementById("gt1").style.display="inline";
    document.getElementById("gt2").style.display="inline";
    document.getElementById("gt3").style.display="inline";
    document.getElementById("gt4").style.display="inline";
    document.getElementById("gt5").style.display="inline";
    document.getElementById("gt6").style.display="inline";
    document.getElementById("gt7").style.display="inline";
    document.getElementById("gt8").style.display="inline";
    
    document.getElementById("gt0").src="fleet/"+car+".jpg";
    document.getElementById("gt1").src="fleet/"+car+".1.jpg";
    document.getElementById("gt2").src="fleet/"+car+".2.jpg";
    document.getElementById("gt3").src="fleet/"+car+".3.jpg";
    document.getElementById("gt4").src="fleet/"+car+".4.jpg";
    document.getElementById("gt5").src="fleet/"+car+".5.jpg";
    document.getElementById("gt6").src="fleet/"+car+".6.jpg";
    document.getElementById("gt7").src="fleet/"+car+".7.jpg";
    document.getElementById("gt8").src="fleet/"+car+".8.jpg";

    document.getElementById("gallery").style.display="block";
    document.getElementById("screen").style.display="block";


}

function closegal(){
    document.getElementById("gallery").style.display="none";
    document.getElementById("screen").style.display="none";
    console.log("close");
}