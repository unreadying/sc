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
var gal=false;


menubutton.onclick=menutog;
x.onclick=menutog;


document.addEventListener("keydown",navigate)
document.addEventListener("mouseover",hover)

function hover(event){
    var ccar = Number(event.target.name);
    for(i=0;i<totalcars;i++){
        document.getElementsByName(""+(i+1)+"")[0].src="fleet/"+(i+1)+".jpg";
        document.getElementsByName(""+(i+1)+"")[1].src="fleet/"+(i+1)+".jpg";
    }
    if(ccar<=totalcars && ccar>0){
        if(window.innerHeight<window.innerWidth){
        document.getElementsByName(""+(ccar)+"")[0].src="fleet/"+(ccar+(1)/100)+".jpg";
        }else{
            document.getElementsByName(""+(ccar)+"")[1].src="fleet/"+(ccar+(1)/100)+".jpg";
        }
    }
}

function rand(n){
    return Math.floor(Math.random()*n);
}

function navigate(event){
    if(event.key=="ArrowLeft"){
        previmg();
    }
    if(event.key=="ArrowRight"){
        nextimg();
    }
    if(event.key=="Escape"){
        closegal();
    }
    if(event.key=="ArrowDown"){
        
        if(gal==true){
            car+=1;
        }
        if(car>totalcars){
            car=1;
        }
        opengal();
    }
    if(event.key=="ArrowUp"){
        
        if(gal==true){
            car-=1;
        }
        if(car<1){
            car=totalcars;
        }
        opengal();
    }
}

function imgsel(event){
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

function hide(event){
	console.log(event.target.id);
    var img=document.getElementById(event.target.id);

    img.style.display="none";
}

function changefinder(){
    for(i=0;i<20;i++){
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
		var val = c/100;
		var carval = car+val;
		carval=Math.round(carval*100)/100;
        document.getElementById("gt"+(i)+"").src="fleet/"+carval+".jpg";
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
		var val = c/100;
		var carval = car+val;
		carval=Math.round(carval*100)/100;
        document.getElementById("gt"+(i)+"").src="fleet/"+carval+".jpg";
    }
    
}

document.getElementById("screen").onclick=closegal;

function opengal(event){
    gal=true;
    changes=0;
    if(typeof(event.target.name)=="string"){
    car = event.target.name;
    }



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
	document.getElementById("gt9").style.display="inline";
	document.getElementById("gt10").style.display="inline";
	document.getElementById("gt11").style.display="inline";
	document.getElementById("gt12").style.display="inline";
	document.getElementById("gt13").style.display="inline";
	document.getElementById("gt14").style.display="inline";
	document.getElementById("gt15").style.display="inline";
	document.getElementById("gt16").style.display="inline";
	document.getElementById("gt17").style.display="inline";
	document.getElementById("gt18").style.display="inline";
	document.getElementById("gt19").style.display="inline";
	document.getElementById("gt20").style.display="inline";
    
    document.getElementById("gt0").src="fleet/"+car+".jpg";
    document.getElementById("gt1").src="fleet/"+car+".01.jpg";
    document.getElementById("gt2").src="fleet/"+car+".02.jpg";
    document.getElementById("gt3").src="fleet/"+car+".03.jpg";
    document.getElementById("gt4").src="fleet/"+car+".04.jpg";
    document.getElementById("gt5").src="fleet/"+car+".05.jpg";
    document.getElementById("gt6").src="fleet/"+car+".06.jpg";
    document.getElementById("gt7").src="fleet/"+car+".07.jpg";
    document.getElementById("gt8").src="fleet/"+car+".08.jpg";
	document.getElementById("gt9").src="fleet/"+car+".09.jpg";
	document.getElementById("gt10").src="fleet/"+car+".1.jpg";
	document.getElementById("gt11").src="fleet/"+car+".11.jpg";
	document.getElementById("gt12").src="fleet/"+car+".12.jpg";
	document.getElementById("gt13").src="fleet/"+car+".13.jpg";
	document.getElementById("gt14").src="fleet/"+car+".14.jpg";
	document.getElementById("gt15").src="fleet/"+car+".15.jpg";
	document.getElementById("gt16").src="fleet/"+car+".16.jpg";
	document.getElementById("gt17").src="fleet/"+car+".17.jpg";
	document.getElementById("gt18").src="fleet/"+car+".18.jpg";
	document.getElementById("gt19").src="fleet/"+car+".19.jpg";
	document.getElementById("gt20").src="fleet/"+car+".20.jpg";
	
    document.getElementById("gallery").style.display="block";
    document.getElementById("screen").style.display="block";


}

function closegal(){
    gal=false;
    document.getElementById("gallery").style.display="none";
    document.getElementById("screen").style.display="none";
    console.log("close");
}