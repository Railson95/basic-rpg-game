import Character from "./character.js";

export default class Paladin extends Character{

    constructor(data, life, mana) {
        super(data, life, mana);
    }

    getStatusHtml() {
        return this.getLifeStatus() + this.getManaStatus();
    }

}