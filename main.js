var SR = window.webkitSpeechRecognition;

var r= new SR;


function start()
{

r.start();
}

r.onresult = function(event) {

console.log(event);

var Content= event.results[0][0].transcript;



if(Content=="take my selfie"){


    speak();
}





}
function speak(){
var synth= window.speechSynthesis;

speak_data= "Taking your selfie and making a collage in 5 seconds";

var utterthis= new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);

Webcam.attach(camera);



}
camera=document.getElementById("camera");
Webcam.set({

width:360,
height:250,
image_format:'jpeg',
jpeg_quality:100




});




















































































