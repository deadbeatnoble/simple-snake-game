const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d", {willReadFrequently: true});

const p = {x:50, y:50};
const f = {x:150, y:150};
var tp = [{x:p.x,y:p.y}];
const l = {b:0};
let d = 0;

context.strokeStyle = "green";
context.fillStyle = "red";
context.strokeRect(p.x,p.y,10,10);

let fruit = (stat) => {
    if (stat === false) {
        context.fillRect(f.x,f.y,10,10);
    } else {
        l.b++;

        tp.unshift({x:f.x,y:f.y});

        context.strokeRect(tp[0].x,tp[0].y,10,10);

        return;
    }
};

document.body.addEventListener('keydown', (e) => {
    if (e.key === "ArrowUp") {
        d = 0; // upward
    } else if (e.key === "ArrowDown") {
        d = 2; // downward
    } else if (e.key === "ArrowLeft") {
        d = 3; // toLeft
    } else if (e.key === "ArrowRight") {
        d = 1; // toRight
    }


    for (let i = l.b; i > 0; i--) {
        tp[i].x = tp[i - 1].x;
        tp[i].y = tp[i - 1].y;
    }

    if (d === 0) {
        tp[0].y -= 10; // upward
    } else if (d === 1) {
        tp[0].x += 10; // toRight
    } else if (d === 2) {
        tp[0].y += 10; // downward
    } else if (d === 3) {
        tp[0].x -= 10; // toLeft
    }

    context.clearRect(0, 0, 640, 480);


    for (let i = 0; i <= l.b; i++) {
        console.log(i + " : " + tp[i].x, tp[i].y);
        context.strokeRect(tp[i].x, tp[i].y, 10, 10);
    }

    check(tp[0].x,tp[0].y);
});


let check = (x,y) => {
    if(x===f.x && y===f.y) {
        console.log("yes");
        fruit(true);
        f.x=Math.floor(Math.random()*64)*10;
        f.y=Math.floor(Math.random()*48)*10;


        

        console.log(f.x);
        console.log(f.y);
        fruit(false);
    } else {
        fruit(false);
    }
};



