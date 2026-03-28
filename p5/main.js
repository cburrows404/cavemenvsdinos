function setup() {
    createCanvas(800, 600);
    let inBattle, inPLace, preBattle, pause = false;
    let dino= new Dino(DinoType.T_REX);
    let caveman= new Caveman(50, 50, 5, 1, 0);
}

function draw() {
    dino.show();
    caveman.show();
    // path();
}
