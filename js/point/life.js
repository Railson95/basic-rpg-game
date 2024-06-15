import Point from "./point.js";

var MAX_LIFE = 5000;

export default class Life extends Point{
    constructor(){
        super(MAX_LIFE);
    }

    removeLife(atk_dmg, defense){

        if(!(atk_dmg && defense)){ // check if undefined, 0, null, empty string, NaN, false
            throw "The defense and Atk dmg are wrong {" + this.constructor.name + "}";
        }

        if(this.point <= 0){
            throw "The character died {" + this.constructor.name + "}";
        }
        atk_dmg = atk_dmg - defense;
        this.point -= atk_dmg;
    }
}