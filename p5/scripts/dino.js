
class DinoType {
    static T_REX = new DinoType('T-REX', { Strength: 10, Sprites: ['assets/dino1.png'] })
    constructor(label, attributes) {
        this.label = label
        Object.assign(this, attributes)
    }
}

let activeDinos = {};
let counter = 0;
let dinoImg = [loadImage('assets/dino1.png'),loadImage('assets/dino2.png'),loadImage('assets/dino3.png')];

class Dino {
    constructor(type) {
        this.Position = createVector([0], [0]);
        this.Strength = type.Strength;
        this.Name = type.label;

        

        activeDinos[counter++] = this
    }
    show(){
        fill("#ff0000");
        circle(this.Position[0], this.Positon[1], this.Strength);
        image(dinoImg[1], this.Position[0], this.Position[1]);
    }

    getDamage() {
        return this.Strength
    }

    deleteDino() {
        delete activeDinos[this.Name]
        delete this
    }
}
