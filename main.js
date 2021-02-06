var mouseevent ;

canvas = document.getElementById("myCanvas");
crx= canvas.getContext("2d");

canvas.addEventListener("mousedown", mymousedown);

function mymousedown (e){
 mouseevent ="mousedown";
 console.log(mouseevent);
}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave (e){
 mouseevent ="mouseleave";
 console.log(mouseevent);
}

canvas.addEventListener("mouseup", mymouseup);

function mymouseup (e){
 mouseevent ="mouseup";
 console.log(mouseevent);
}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e){
    console.log("mousemove");
    currentx= e.clientX - canvas.offsetLeft;
    currenty= e.clientY - canvas.offsetTop;
   if(mouseevent == "mousedown"){
       crx.beginPath; 
       crx.color= "color";
       crx.lineWidth="2";
       crx.moveTo(lastx,lasty);
       crx.lineTo(currentx, currenty);
       crx.stroke();
   }
 lastx= currentx;     
 lasty= currenty;

}

