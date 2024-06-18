export default class Point {

    max;
    min;
    point;

    constructor(){
        this.min = 0;
        this.max = 100;
        this.point = 100;
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

    getPercentage(maxPoint, removePoint){
        return Math.abs(((removePoint * maxPoint)/maxPoint) - maxPoint);
    }
    
    getBarHtml(type) {
        let removePoint,percentage;
        if(!type){ // check if undefined, 0, null, empty string, NaN, false
            throw "The type is wrong {" + this.constructor.name + "}";
        }
        if(!(this.point === this.max)){//Stop state
            removePoint = this.max - this.point;
            percentage = this.getPercentage(this.max, removePoint);
        }
        return `<div class="${type}-bar-outer">
                    <div class="${type}-bar-inner ${percentage < 26 ? "danger" : ""}" 
                            style="width:${percentage}%;">
                    </div>
                </div>`
    }
}