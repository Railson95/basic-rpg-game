export default class Point {

    max;
    min;
    currentRealPoint;
    currentFakePoint;

    constructor(){
        this.min = 0;
        this.max = 150;
        this.currentRealPoint = 150;
        this.currentFakePoint = 100;
    }

    getMax(){
        return this.max;
    }

    setMax(newMax){

        if(!newMax){ // check if undefined, 0, null, empty string, NaN, false
            throw "The newMax is wrong {" + this.constructor.name + "}";
        }

        this.max = newMax;
    }

    getBarHtml(type) {
        if(!type){ // check if undefined, 0, null, empty string, NaN, false
            throw "The type is wrong {" + this.constructor.name + "}";
        }

        return `<div class="${type}-bar-outer">
                    <div class="${type}-bar-inner ${this.currentFakePoint < 26 ? "danger" : ""}" 
                            style="width:${this.currentFakePoint}%;">
                    </div>
                </div>`
    }
}