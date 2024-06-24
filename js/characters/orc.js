import Character from "./character.js";
var ATTRIBUTE_INCREASE = 10;
export default class Orc extends Character {
    btnLvlUpIsPress;
    constructor(data, life, mana) {
        super(data, life, mana);
        this.atk_dmg = 20;
        this.defense = 5;
        this.level = 1;
        this.experience = 50;
    }

    pressLvlUpButton() {
        this.level += 1;
        this.attributeIncrease();
    }

    attributeIncrease() {
        this.atk_dmg += ATTRIBUTE_INCREASE;
        this.defense += ATTRIBUTE_INCREASE;
        this.experience += ATTRIBUTE_INCREASE;
        let newMaxLife = this.life.getMax() + ATTRIBUTE_INCREASE;
        this.life.setMax(newMaxLife);
    }

    showAttributes() {
        console.log("======ORC======");
        console.log("Dmg: " + this.getAtk());
        console.log("Defesa: " + this.getDefense());
        console.log("Experience: " + this.getExperience());
        console.log("Max life: " + this.life.getMax());
    }

    setExperience(experience) {
        let experienceIsValid = experience === 0;
        if (!experienceIsValid) {
            // check if undefined, 0, null, empty string, NaN, false
            throw "The experience is wrong {" + this.constructor.name + "}";
        }
        this.experience = experience;
    }

    getDefense() {
        return this.level * this.defense;
    }

    getExperience() {
        return this.level * this.experience;
    }

    getStatusHtml() {
        return this.getLifeStatus();
    }

    getAtk() {
        return this.level * this.atk_dmg;
    }

    takeDmg(dmg) {
        this.life.removeLife(dmg, this.getDefense(), this);
    }
}