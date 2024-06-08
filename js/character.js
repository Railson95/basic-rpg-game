export default class Character{
    constructor(data) {
        Object.assign(this, data)
    }

    getStatusHtml() {
        const {heart, mana} = this
        const health_bar = this.getHealthBarHtml();

        let response = `
                        <div class="health-img">
                            <img class="heart" src="${heart}" alt="health img"> 
                            </img>
                        </div>
                        ${health_bar}
                        `

        if(!mana){
            return response
        }

        const mana_bar = this.getManaBarHtml();


        return `
                <div class="health-img">
                    <img class="heart" src="${heart}" alt="health img"> 
                    </img>
                </div>
                ${health_bar}
                <img class="mana" src="${mana}" alt="mana img">
                ${mana_bar}
                `
    }

    getHealthBarHtml() {
        // const percent = getPercentage(this.health, this.maxHealth);
        const percent = 40;
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                            style="width:${percent}%;">
                    </div>
                </div>`
    }

    getManaBarHtml() {
        // const percent = getPercentage(this.health, this.maxHealth);
        const percent = 40;
        return `<div class="mana-bar-outer">
                    <div class="mana-bar-inner ${percent < 26 ? "danger" : ""}" 
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