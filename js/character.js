import Life from "./point/life.js";
import Mana from "./point/mana.js";

export default class Character{

    constructor(data) {
        Object.assign(this, data)
    }

    getStatusHtml() {

        const life = new Life();
        const mana = new Mana();

        const {img_heart, img_mana} = this
        const health_bar = life.getBarHtml("health");

        let response = `
                        <img class="heart" src="${img_heart}" alt="health img"> 
                        </img>
                        ${health_bar}
                        <h4 class="number-life-mana"> 100 </h4>
                        `

        if(!img_mana){
            return response
        }

        const mana_bar = mana.getBarHtml("mana");

        return `
                <div class="health-img">
                    <img class="heart" src="${img_heart}" alt="health img"> 
                    </img>
                </div>
                ${health_bar}
                <h4 class="number-life-mana"> 100 </h4>
                <img class="mana" src="${img_mana}" alt="mana img">
                ${mana_bar}
                <h4 class="number-life-mana"> 100 </h4>
                `
    }

    getCharacterHtml() {
        const {name, avatar} = this
        return `
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                `
    }
}