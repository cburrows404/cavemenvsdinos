
class DinoType {
    static T_REX = new DinoType('T-REX', { Strength: 10 })
    constructor(label, attributes) {
        this.label = label
        Object.assign(this, attributes)
    }
}

let activeDinos = {};
let counter = 0;

class Dino {
    constructor(type) {
        this.Position = createVector([0], [0], [0])
        this.Strength = type.Strength
        this.Name = type.label

        activeDinos[counter++] = this
    }

    getDamage() {
        return this.Strength
    }

    deleteDino() {
        delete activeDinos[this.Name]
        delete this
    }
}
