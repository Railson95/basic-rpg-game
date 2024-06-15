import Character from "./character.js";

export default class Paladin extends Character{

    strength;
    dexterity;
    energy;

    constructor(data, life, mana) {
        super(data, life, mana);
        this.atk_dmg = 10;
        this.defense = 5;
    }

    getStatusHtml() {
        return this.getLifeStatus() + this.getManaStatus();
    }

    getAtk(){

        if(!this.atk_dmg){ // check if undefined, 0, null, empty string, NaN, false
            throw "The Atk dmg are wrong {" + this.constructor.name + "}";
        }

        return this.atk_dmg;
    }

    takeDmg(dmg){
        this.life.removeLife(dmg, this.defense);
    }

}