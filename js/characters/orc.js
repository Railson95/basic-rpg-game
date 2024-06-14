import Character from "./character.js";

export default class Orc extends Character{

    constructor(data, life, mana) {
        super(data, life, mana);
    }

    getStatusHtml() {
        return this.getLifeStatus();
    }
}