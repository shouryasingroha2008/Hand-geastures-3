
Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    }
    );
}

console.log('ml5 Verion:',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/H43pHJjqc/model.json',modelLoaded);

function modelLoaded(){
    console.log("model loaded!");
}
function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function gotResult(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML=results[0].label;
        if (results[0].label="victory") {
        document.getElementById("update_gesture").innerHTML="&#128076;";
        }
        if (results[0].label="Best") {
            document.getElementById("update_gesture").innerHTML="&#128077;";
        }
        if (results[0].label="amazing") {
            document.getElementById("update_gesture").innerHTML="&#128076;";
        }
    }
}
