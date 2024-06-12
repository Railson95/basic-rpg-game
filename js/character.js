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
        const mana_bar = mana.getBarHtml("mana");
        let mana_status = `<img class="mana" src="${img_mana}" alt="mana img">
                            ${mana_bar}        
                            <h4 class="number-life-mana"> 100 </h4>`

        let life_status = `<img class="heart" src="${img_heart}" alt="health img"> 
                        </img>
                        ${health_bar}
                        <h4 class="number-life-mana"> 100 </h4>
                        `

        if(!img_mana){
            return life_status
        }

        return life_status + mana_status

    }

    getCharacterHtml() {
        const {name, avatar} = this
        return `
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                `
    }
}