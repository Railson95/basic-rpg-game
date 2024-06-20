export default class Character{

    level;
    atk_dmg; 
    life;
    mana;
    experience;
    defense;

    constructor(data, life, mana) {
        Object.assign(this, data)
        this.life = life;
        this.mana = mana;
    }

    isDead(){
        return this.life.previousRealPoint <= 0 ? true:false;
    }

    getLifeStatus(){
        const {img_heart} = this
        const health_bar = this.life.getBarHtml("health");
        let life_status = `<img class="heart" src="${img_heart}" alt="health img"> 
                        </img>
                        ${health_bar}
                        <h4 class="number-life-mana"> ${this.life.getMax()} </h4>
                        `
        return life_status
    }

    getManaStatus(){
        const {img_mana} = this
        const mana_bar = this.mana.getBarHtml("mana");
        let mana_status = `<img class="mana" src="${img_mana}" alt="mana img">
                            ${mana_bar}        
                            <h4 class="number-life-mana"> 100 </h4>`
        return mana_status
    }

    getCharacterHtml() {
        const {avatar} = this
        return `
                <h4 class="level"> Level: ${this.level} </h4>
                <h4 class="dmg"> Dmg: ${this.atk_dmg} </h4>
                <h4 class="defense"> Defense: ${this.defense} </h4>
                <h4 class="experience"> Experience: ${this.experience} </h4>
                <img class="avatar" src="${avatar}" />
                `
    }
}