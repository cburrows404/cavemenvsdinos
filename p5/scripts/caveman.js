class CavemanType{
    static Puncher = new DinoType('Puncher', { speed: 1, range: 2, strength: 2 })
    constructor(attributes) {
        Object.assign(this, attributes)
    }
}

class Caveman{
    constructor(posX, posY, speed, range, strength, id){
        this.posX =posX;
        this.posY =posY;
        this.speed =speed;
        this.range =range;
        this.strength = strength;
        this.id = id;
    };
    show(){
        fill("#000000");
        circle(this.posX, this.posY, this.range);
    }
    calculateClosestDino(dinoList){
        //for each existing dino, calculate if dist(self, dino) < range and save smallest number
        //return dino within range with least distance
        
    }
    attack(closestDinoID){
        //play attack animation and deal strength damage to selected dino
    }


}