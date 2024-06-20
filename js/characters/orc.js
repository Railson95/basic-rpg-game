import Character from "./character.js";
var ATTRIBUTE_INCREASE = 10;
export default class Orc extends Character{
    btnLvlUpIsPress;
    constructor(data, life, mana) {
        super(data, life, mana);
        this.atk_dmg = 20;
        this.defense = 5;
        this.level = 1;
        this.experience = 50;
    }

    pressLvlUpButton(){
        this.level += 1;
        this.attributeIncrease();
    }

    attributeIncrease() {
        this.atk_dmg += ATTRIBUTE_INCREASE;
        this.defense *= this.level;
        this.experience += ATTRIBUTE_INCREASE;
        let newMaxLife = this.life.getMax() + ATTRIBUTE_INCREASE;
        this.life.setMax(newMaxLife);
    }

    showAttributes(){
        console.log("======ORC======");
        console.log("Dmg: " + this.atk_dmg)
        console.log("Defesa: " + this.defense)
        console.log("Experience: " + this.experience)
        console.log("Max life: " + this.life.getMax())
    }

    getDefense(){
        return this.defense;
    }

    getExperience(){
        return this.level*this.experience;
    }

    getStatusHtml() {
        return this.getLifeStatus();
    }

    getAtk(){
        return this.level*this.atk_dmg;
    }

    takeDmg(dmg){
        this.life.removeLife(dmg, this.getDefense(), this);
    }

}