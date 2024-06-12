export default class Point {

    max;
    min;
    point;

    constructor(max){
        this.max = max;
        this.min = 0;
        this.point = 100;
    }

    update(level) {

        if (level < this.min){
            console.error("The level cannot be negative");    
            return;
        }

        this.point *= level;

        console.log("Points: " + this.point);
        if(this.point >= this.max) {
            console.error("Your points " + this.constructor.name + " cannot be greater than the max " + this.max);
            this.point = this.max;
            return;
        }
    }  
}