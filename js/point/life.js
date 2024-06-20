import Point from "./point.js";

export default class Life extends Point{
    constructor(){
        super();
    }

    removeLife(atk_dmg, defense, obj){
        this.btnAtkPress = true;
        this.previousRealPoint = this.currentRealPoint;
        
        if(!(atk_dmg && defense)){ // check if undefined, 0, null, empty string, NaN, false
            throw "The defense and Atk dmg are wrong {" + this.constructor.name + "}";
        }

        if(this.currentRealPoint <= 0){
            this.currentFakePoint = 0;
            console.log("The character died {" + obj.constructor.name + "}");
            return;
        }

        if(defense >= atk_dmg){
            console.log("Very low damage for this defense {" + this.constructor.name + "}");
            return;
        }

        atk_dmg = atk_dmg - defense;

        if(atk_dmg >= this.currentRealPoint){
            this.currentRealPoint = 0;
            return;
        }

        this.currentRealPoint -= atk_dmg;

    }
}