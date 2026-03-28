
let path = [[0, 4], [ 1, 5], [2, 6] , [4, 6], [6,5]]


class Segment {
    constructor (x0, y0, x1, y1, x2, y2, x3, y3) {
        this.a = createVector(x0, y0);
        this.b = createVector(x1, y1);
        this.c = createVector(x2, y2);
        this.d = createVector(x3, y3);
    }
}

let alpha = 0.5;
let tension = 0;

class Spline {
    constructor (segments) {

    }

    draw() {
        
    }
}


class Map {
    constructor() {}



    getPointAlong(i) {

    }
}

function path(){
    let x1,y1=50;
    let xanchor1,yanchor1=100;
    let x2,y2=70;
    let xanchor2,yanchor2=200;
    fill("black");
    curve(x1,y1,xanchor1,yanchor1,x2,y2,xanchor2,yanchor2);
}