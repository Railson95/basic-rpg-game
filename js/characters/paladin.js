import Character from "./character.js";
var MAX_LEVEL = 10;
export default class Paladin extends Character{

    strength;
    dexterity;
    energy;
    nextLevel;

    constructor(data, life, mana) {
        super(data, life, mana);
        this.atk_dmg = 45;
        this.defense = 5;
        this.experience = 0;
        this.nextLevel = 51;
        this.level = 1;
    }

    levelIncrease(){

        if(this.level === MAX_LEVEL){
            console.log("Maximum level reached {" + this.constructor.name + "}");
            return;
        }

        if(this.experience >= this.nextLevel){
            this.level++;
            this.nextLevel *= 2;
        }
    }

    setExperience(experience) {
        if(!experience){ // check if undefined, 0, null, empty string, NaN, false
            throw "The experience is wrong {" + this.constructor.name + "}";
        }
        this.experience += experience;
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