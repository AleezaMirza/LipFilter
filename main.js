lipX=0;
lipY=0;

function preload(){
    lip_image= loadImage('https://i.postimg.cc/L5nSWVnz/1-223-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function draw(){
    image (video, 0, 0, 300, 300);
    image(lip_image, lipX - 15, lipY + 10, 30, 30);
    

}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        lipX= results[0].pose.nose.x;
        lipY= results[0].pose.nose.y;
        console.log("nose x = " + lipX);
        console.log("nose y = " + lipY);

    }
}