console.log("connected");

// canvas animation
const canvas = document.getElementById('landing-canvas');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;

canvas.width = width;
canvas.height = height;

const points = 80;
const r = 300;

let rotationX = 0;
let rotationY = 0;
let rotationZ = 0;

function draw() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = 'black';  
 
  for (let i = 0; i < points; i++) {
     const phi = (i / points) * Math.PI;
     for (let j = 0; j < points; j ++) {
       const theta = (j / points) * Math.PI * 2;
       const x = r * Math.cos(phi + rotationX) * Math.sin(theta + rotationY);
       const y = r * Math.sin(phi + rotationX) * Math.sin(theta);
       const z = r * Math.cos(phi + rotationZ);
       ctx.save();
       ctx.translate(width * 0.5, height * 0.5);
       ctx.fillRect(x, y, z * 0.005, z * 0.005);
       ctx.restore();
     }
  }
}

function update() {
  rotationX += 0.0001;
  rotationY += 0.005;
  rotationZ += 0.01;  
}

function animate() {
  update();
  draw(); 
  requestAnimationFrame(animate);
}

animate();
