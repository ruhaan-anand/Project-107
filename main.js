Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach('#webcam')

function take_snapshot(){

    Webcam.snap(function(datauri){
        document.getElementById("captured-image").innerHTML= '<img id="take_image" src="'+datauri+'"/>';
    })
};

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6ubJOas3l/',modelLoaded);

 function modelLoaded(){}
