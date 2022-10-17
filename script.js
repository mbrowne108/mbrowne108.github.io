const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = []
let adjustX = 50
let adjustY = 100

const mouse = {
    x: null,
    y: null,
    radius: 125
}

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
})



ctx.font = "bold 90px trebuchet ms"
ctx.fillText('Matt Browne', adjustX, 100)
ctx.font = "20px trebuchet ms"
ctx.fillText('Hello! My name is Matt Browne and I am a web developer, software engineer, and freelance classical composer', adjustX, 140) 
ctx.fillText('living in New York, NY. My experience draws on fifteen years of music education, community outreach, collaboration,', adjustX, 160)
ctx.fillText('and creating music. I hold a certificate in Full Stack Web Development from the Flatiron School as well as a', adjustX, 180)
ctx.fillText('Doctorate in Music Composition from the University of Michigan. From my breadth of diverse experience, I bring', adjustX, 200)
ctx.fillText('creativity, a collaborative spirit, and rigid attention to detail to any project.', adjustX, 220)

ctx.font = "bold 26px trebuchet ms"
ctx.fillText('Technical Skills', adjustX, 300) 
ctx.font = "24px trebuchet ms"
ctx.fillText('JavaScript, React, Ruby on Rails, HTML, CSS, Bootstrap, SQL, Postgres, Weird Particle Effects', adjustX, 324) 

const textCoords = ctx.getImageData(0, 0, canvas.width, canvas.height)

class Particle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 0.6;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1
    }
    draw() {
        ctx.fillStyle = 'white'
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt(dx * dx + dy * dy)
        let forceDirX = dx / dist
        let forceDirY = dy / dist
        let maxDist = mouse.radius
        let force = (maxDist - dist) / maxDist
        let dirX = forceDirX * force * this.density
        let dirY = forceDirY * force * this.density


        if (dist < mouse.radius) {
            this.x -= dirX
            this.y -= dirY
        } else {
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx/3
            }
            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy/3
            }
        }
    }
}

function init() {
    particles = []
    for (let y = 0, y2 = textCoords.height; y < y2; y++) {
        for (let x = 0, x2 = textCoords.width; x < x2; x++) {
            if (textCoords.data[(y * 4 * textCoords.width) + (x * 4) + 3] > 128) {
                let posX = x + adjustX
                let posY = y + adjustY
                particles.push(new Particle(posX, posY))
            }
        }
    }
}
init()

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
    }
    requestAnimationFrame(animate)
}
animate()