import Point from "./point.js";

var MAX_LIFE = 5000;

export default class Life extends Point{
    constructor(){
        super(MAX_LIFE);
    }

    removeLife(atk_dmg){

        if(this.point <= 0){
            throw "The character died {" + this.constructor.name + "}";
        }
        this.point -= atk_dmg;
    }
}