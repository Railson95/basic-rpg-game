import Point from "./point.js";

var MAX_LIFE = 5000;

export default class Life extends Point{
    constructor(){
        super(MAX_LIFE);
    }

    removeLife(atk_dmg){
        this.point -= atk_dmg;
    }
}