export default class Character{

    level;
    atk_dmg; 
    life;
    mana;

    constructor(data, life, mana) {
        Object.assign(this, data)
        this.atk_dmg = 50;
        this.life = life;
        this.mana = mana;
    }

    getAtk(){
        return this.atk_dmg;
    }

    takeDmg(dmg){
        this.life.removeLife(dmg);
    }

    getLifeStatus(){
        const {img_heart} = this
        const health_bar = this.life.getBarHtml("health");
        let life_status = `<img class="heart" src="${img_heart}" alt="health img"> 
                        </img>
                        ${health_bar}
                        <h4 class="number-life-mana"> 100 </h4>
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
        const {name, avatar} = this
        return `
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                `
    }
}