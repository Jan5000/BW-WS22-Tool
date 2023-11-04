let c;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let imgArray = [];
let secHeight = [];
var button0;
var button1;
var button8;
var newArr;

let cW = 2100;
let cH = 2970;
var cWnew = 0;
var cHnew = 0;

let setNum = 10;

let imgNew;
let imgNew1;
let imgNew2;
let imgNew3;
let imgOverlay;
let imgArrayNew = [];


function preload() {
  imgNew = loadImage('assets/set'+setNum+'/7.jpg');
  imgNew1 = loadImage('assets/set'+setNum+'/8.jpg');
  imgNew2 = loadImage('assets/set'+setNum+'/9.jpg');
  imgNew3 = loadImage('assets/set'+setNum+'/10.jpg');
  imgOverlay = loadImage('assets/set'+setNum+'/11.jpg');
}



function setup() {
  //frameRate(1);
  
  cWnew = windowHeight/2.5;
  cHnew = cWnew*(cH/cW);
  c = createCanvas(cWnew, cHnew);
  c.position((windowWidth/2)-cWnew/2, windowHeight/5);
  img1 = loadImage('assets/set'+setNum+'/1.jpg');
  img2 = loadImage('assets/set'+setNum+'/2.jpg');
  img3 = loadImage('assets/set'+setNum+'/3.jpg');
  img4 = loadImage('assets/set'+setNum+'/4.jpg');
  img5 = loadImage('assets/set'+setNum+'/5.jpg');
  img6 = loadImage('assets/set'+setNum+'/6.jpg');
  imgArray = [img1,img2,img3,img4,img5,img6];
  secHeight = [6,6,6,6,6,6];

  imgArrayNew = [imgNew,imgNew1,imgNew2,imgNew3];

  //imgNew = loadImage('assets/set'+setNum+'/7.jpg');

    // UI
  button0 = createButton('Random');
  button0.position((windowWidth/2)-(windowHeight/20), windowHeight/15);
  button0.size(windowHeight/10);
  //button0.mousePressed(setCompRandom);
  button0.mousePressed(setCompRandomNew);
  button0.style('font-size', '1.25vh');

 /*  button0 = createButton('Set');
  button0.position((windowWidth/2)-(windowHeight/20), windowHeight/15);
  button0.size(windowHeight/10);
  button0.mousePressed(setSet);
  button0.style('font-size', '1.25vh'); */
  
  /* button1 = createButton('1');
  button1.position((windowHeight/30), (windowHeight/5)*4);
  button1.size(windowHeight/15);
  button1.mousePressed(setCompSection1);
  button1.style('font-size', '1.25vh'); */
/* 
  button1 = createButton('');
  button1.position((windowWidth/2)-cWnew/2, windowHeight/5+((height/6)*0));
  button1.size(width,height/6);
  button1.mousePressed(setCompSection1);
  button1.style('font-size', '1.25vh');
  button1.style('background-color', 'transparent');
  button1.style('border', '0px solid white');

  button1 = createButton('');
  button1.position((windowWidth/2)-cWnew/2, windowHeight/5+((height/6)*1));
  button1.size(width,height/6);
  button1.mousePressed(setCompSection2);
  button1.style('font-size', '1.25vh');
  button1.style('background-color', 'transparent');
  button1.style('border', '0px solid white');

  button1 = createButton('');
  button1.position((windowWidth/2)-cWnew/2, windowHeight/5+((height/6)*2));
  button1.size(width,height/6);
  button1.mousePressed(setCompSection3);
  button1.style('font-size', '1.25vh');
  button1.style('background-color', 'transparent');
  button1.style('border', '0px solid white');

  button1 = createButton('');
  button1.position((windowWidth/2)-cWnew/2, windowHeight/5+((height/6)*3));
  button1.size(width,height/6);
  button1.mousePressed(setCompSection4);
  button1.style('font-size', '1.25vh');
  button1.style('background-color', 'transparent');
  button1.style('border', '0px solid white');
  
  button1 = createButton('');
  button1.position((windowWidth/2)-cWnew/2, windowHeight/5+((height/6)*4));
  button1.size(width,height/6);
  button1.mousePressed(setCompSection5);
  button1.style('font-size', '1.25vh');
  button1.style('background-color', 'transparent');
  button1.style('border', '0px solid white');

  button1 = createButton('');
  button1.position((windowWidth/2)-cWnew/2, windowHeight/5+((height/6)*5));
  button1.size(width,height/6);
  button1.mousePressed(setCompSection6);
  button1.style('font-size', '1.25vh');
  button1.style('background-color', 'transparent');
  button1.style('border', '0px solid white'); */

  //slider = createSlider(3,12,6);
 // slider.size(100);
 // slider.position(70, 200);

  /* button1 = createButton('2');
  button1.position((windowHeight/30), (windowHeight/5)*4.15);
  button1.size(windowHeight/15);
  button1.mousePressed(setCompSection2);
  button1.style('font-size', '1.25vh');

  button1 = createButton('3');
  button1.position((windowHeight/30)*1, (windowHeight/5)*4.3);
  button1.size(windowHeight/15);
  button1.mousePressed(setCompSection3);
  button1.style('font-size', '1.25vh');

  button1 = createButton('4');
  button1.position((windowHeight/30)*1, (windowHeight/5)*4.45);
  button1.size(windowHeight/15);
  button1.mousePressed(setCompSection4);
  button1.style('font-size', '1.25vh');

  button1 = createButton('5');
  button1.position((windowHeight/30)*1, (windowHeight/5)*4.6);
  button1.size(windowHeight/15);
  button1.mousePressed(setCompSection5);
  button1.style('font-size', '1.25vh');

  button1 = createButton('6');
  button1.position((windowHeight/30)*1, (windowHeight/5)*4.75);
  button1.size(windowHeight/15);
  button1.mousePressed(setCompSection6);
  button1.style('font-size', '1.25vh');
*/
  button8 = createButton('Save');
  button8.position((windowWidth/2)-(windowHeight/30), windowHeight/1.15);
  button8.size(windowHeight/15);
  button8.mousePressed(saveComp);
  button8.style('font-size', '1.25vh'); 

  
}
function draw() {
  //setCompSection1();
  //setCompSection2();
  //wait(100);
  //setCompRandomNew();
}
function wait(time)
{
  start = millis()
  do
  {
    current = millis();
  }
  while(current < start + time)
}

/* function mousePressed() {
  saveFrames('out', 'png', 1, 25, data => {
    save(data, "jsjs.mp4");
  });
  } */

function setCompSection1() {
  //console.log(random(imgArray));
  image(random(imgArray), 0, 0+((height/6)*0), width, height/6);
}
function setCompSection2() {
  //console.log(random(imgArray));
  image(random(imgArray), 0, 0+((height/6)*1), width, height/6);
}
function setCompSection3() {
  //console.log(random(imgArray));
  image(random(imgArray), 0, 0+((height/6)*2), width, height/6);
}
function setCompSection4() {
  //console.log(random(imgArray));
  image(random(imgArray), 0, 0+((height/6)*3), width, height/6);
}
function setCompSection5() {
  //console.log(random(imgArray));
  image(random(imgArray), 0, 0+((height/6)*4), width, height/6);
}
function setCompSection6() {
  //console.log(random(imgArray));
  image(random(imgArray), 0, 0+((height/6)*5), width, height/6);
}

function setCompRandom() {
  let newArr = shuffle(imgArray);
  for(let i = 0; i < 6; i++) {
    let ranX = random()
    //imageMode(CENTER);
    image(newArr[i], 0, 0+((height/6)*i), width, height/6);
  }
}

function setCompRandomNew() {
  let newArr = shuffle(imgArrayNew);
  let indexs = [0,1,2,3];
  let ranIndex = random(indexs);

  background(0);
  let ranScale = random(1,10);
  //let ranScale = 1;
  let ranX = random(0, (newArr[0].width/ranScale)-width) * (-1);
  let ranY = random(0, (newArr[0].height/ranScale)-height) * (-1);
  image(newArr[0], ranX, ranY, newArr[0].width/ranScale, newArr[0].height/ranScale);
  
  image(imgOverlay,0,0,width,height);
}

function saveComp() {
  saveCanvas(c, 'myCanvas', 'jpg');
}

function changeSection() {
  secHeight = [];
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    saveCanvas(c, 'myCanvas', 'jpg');
  }

}
