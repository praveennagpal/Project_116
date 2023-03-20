noseX = 0;
noseY = 0;

function preload() {
    moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(640, 300);
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();

    tint_color = "";

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function draw() {
    image(video, 0, 0, 640, 480)
    image(moustache, noseX - 75, noseY - 20, 150, 100)
    tint(tint_color);
}


function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}


function take_snapshot() {
    save('myFilterImage.png');
}