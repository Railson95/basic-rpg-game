export default class Character{
    constructor(data) {
        Object.assign(this, data)
    }

    getStatusHtml() {
        const {heart, mana} = this
        const health_bar = this.getBarHtml("health");

        let response = `
                        <img class="heart" src="${heart}" alt="health img"> 
                        </img>
                        ${health_bar}
                        <h4 class="number-life-mana"> 100 </h4>
                        `

        if(!mana){
            return response
        }

        const mana_bar = this.getBarHtml("mana");


        return `
                <div class="health-img">
                    <img class="heart" src="${heart}" alt="health img"> 
                    </img>
                </div>
                ${health_bar}
                <h4 class="number-life-mana"> 100 </h4>
                <img class="mana" src="${mana}" alt="mana img">
                ${mana_bar}
                <h4 class="number-life-mana"> 100 </h4>
                `
    }

    getBarHtml(type) {
        // const percent = getPercentage(this.health, this.maxHealth);
        const percent = 40;
        return `<div class="${type}-bar-outer">
                    <div class="${type}-bar-inner ${percent < 26 ? "danger" : ""}" 
                            style="width:${percent}%;">
                    </div>
                </div>`
    }

    getCharacterHtml() {
        const {name, avatar} = this
        return `
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                `
    }
}