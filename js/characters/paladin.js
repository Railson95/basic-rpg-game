import Character from "./character.js";
var MAX_LEVEL = 10;
var ATTRIBUTE_INCREASE = 10;
export default class Paladin extends Character{

    strength;
    dexterity;
    energy;
    nextLevel;

    constructor(data, life, mana) {
        super(data, life, mana);
        this.strength = 30;
        this.dexterity = 20;
        this.energy = 10;
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
            this.attributeIncrease();
            this.level++;
            this.nextLevel *= 2;
        }
    }

    attributeIncrease() {
        this.strength += ATTRIBUTE_INCREASE;
        this.dexterity += ATTRIBUTE_INCREASE;
        this.energy += ATTRIBUTE_INCREASE;
        this.atk_dmg += this.strength * 0.5; 
        this.defense += this.dexterity * 0.5;
        let newMaxLife = this.life.getMax() + (this.strength*0.5);
        this.life.setMax(newMaxLife);
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