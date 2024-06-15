import Character from "./character.js";

export default class Orc extends Character{

    constructor(data, life, mana) {
        super(data, life, mana);
        this.atk_dmg = 20;
    }

    getStatusHtml() {
        return this.getLifeStatus();
    }

    getAtk(){

        if(!(this.level && this.atk_dmg)){ // check if undefined, 0, null, empty string, NaN, false
            throw "The level and Atk dmg are wrong {" + this.constructor.name + "}";
        }

        return this.level*this.atk_dmg;
    }

    takeDmg(dmg){
        this.life.removeLife(dmg);
    }

}