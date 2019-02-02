var i=0;
var para;
var songs = ["song/s1.mp3","song/s2.mp3","song/s3.mp3"];
 var sound=document.createElement("AUDIO");
 sound.setAttribute("controls", "controls");
 document.body.appendChild(sound);
 sound.setAttribute("src",songs[i]);

para = document.createElement("P");
 para.setAttribute("id", i);
 var t = document.createTextNode("play-now");
 para.appendChild(t);
 
 function play(){
if(i<3)
{
	
var divNumber=1;
 sound.setAttribute("src",songs[i]);
 sound.setAttribute("autoplay", "autoplay");
if(sound.ended===false)
{
 document.getElementById("s"+divNumber).appendChild(para);
}
i++;

 divNumber++;

}
else
{i=0;}

 }
 function repeat() {
 
 		i=0;
 	    play();
 	
 }
 function shuffle() {
  	i=Math.floor(Math.random() * 3) + 1;

 	play();
 	
 }

function play1(){
 sound.setAttribute("src",songs[0]);
 sound.setAttribute("autoplay", "autoplay");

 }
 function play2(){
 sound.setAttribute("src",songs[1]);
 sound.setAttribute("autoplay", "autoplay");

 }
 function play3(){
 sound.setAttribute("src",songs[2]);
 sound.setAttribute("autoplay", "autoplay");

 }