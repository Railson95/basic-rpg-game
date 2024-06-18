import Point from "./point.js";

export default class Life extends Point{
    constructor(){
        super();
    }

    removeLife(atk_dmg, defense){

        if(!(atk_dmg && defense)){ // check if undefined, 0, null, empty string, NaN, false
            throw "The defense and Atk dmg are wrong {" + this.constructor.name + "}";
        }

        if(this.point <= 0){
            console.log("The character died {" + this.constructor.name + "}");
            return;
        }

        if(defense >= atk_dmg){
            console.log("Very low damage for this defense {" + this.constructor.name + "}");
            return;
        }

        atk_dmg = atk_dmg - defense;

        if(atk_dmg >= this.point){
            this.point = 0;
            return;
        }

        this.point -= atk_dmg;

    }
}