import Point from "./point.js";

var MAX_MANA = 3000;

export default class Mana extends Point{
    constructor(){
        super(MAX_MANA);
    }
}