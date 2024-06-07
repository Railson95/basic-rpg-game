export default class Character{
    constructor(data) {
        Object.assign(this, data)
    }

    getStatusHtml() {
        const {heart} = this
        const health_bar = this.getHealthBarHtml();
        return `<img class="health-img" src="${heart}" alt="health img" />
                ${health_bar}`
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

    getCharacterHtml() {
        const {name, avatar} = this
        return `
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                `
    }
}