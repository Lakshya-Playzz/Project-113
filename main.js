function preload(){}
function setup(){
canvas = createCanvas(640,480)
canvas.center()
video = createCapture(VIDEO)
video.hide()
tint_color = ""
}
function draw(){
    image(video , 230, 135 , 200 , 200)
    tint(tint_color)
    circle(50,50,90)
    circle(590,50,90)
    circle(590,430,90)
    circle(50,430,90)
    rect(90, 20, 460, 55, 20);
    rect(90, 400, 460, 55, 20);
    rect(568, 90, 50, 300, 20);
    rect(20, 90, 50, 300, 20);
}
function filter_tint(){
tint_color = document.getElementById("color_tint").value
}
function take_snapshot(){
    save("selfie.png")
}
