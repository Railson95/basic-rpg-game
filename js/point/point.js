export default class Point {

    max;
    min;
    btnAtkPress;
    currentRealPoint;
    previousRealPoint;
    currentFakePoint;
    previousFakePoint;

    constructor(){
        this.min = 0;
        this.max = 150;
        this.currentRealPoint = 100;
        this.previousRealPoint = 150;
        this.currentFakePoint = 100;
        this.previousFakePoint = 100;
        this.btnAtkPress = false;
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

    getPercentage(){
        return (100*(this.previousRealPoint - this.currentRealPoint))/this.max;
    }
    
    getBarHtml(type) {
        if(!type){ // check if undefined, 0, null, empty string, NaN, false
            throw "The type is wrong {" + this.constructor.name + "}";
        }

        if(this.btnAtkPress){
            this.btnAtkPress = false;
            let realPercentage = this.getPercentage();
            realPercentage = Math.floor(realPercentage);
            let offSet = this.currentFakePoint - realPercentage;
            offSet = Math.floor(offSet); 
            this.currentFakePoint = offSet;
        }
        
        return `<div class="${type}-bar-outer">
                    <div class="${type}-bar-inner ${this.currentFakePoint < 26 ? "danger" : ""}" 
                            style="width:${this.currentFakePoint}%;">
                    </div>
                </div>`
    }
}