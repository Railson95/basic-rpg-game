import characterData from "./data.js"
import Paladin from "./characters/paladin.js";
import Orc from "./characters/orc.js";
import Life from "./point/life.js";
import Mana from "./point/mana.js";

function render(paladin, orc) {
    document.getElementById('hero').innerHTML = paladin.getCharacterHtml();
    document.getElementById('hero-status').innerHTML = paladin.getStatusHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
    document.getElementById('monster-status').innerHTML = orc.getStatusHtml();
}

function getOrcFight(){
    if(!orcArray.length){
        throw "Orc Array is empty";
    }

    let orcFight = [...orcArray].shift();

    if(!orcFight.isDead()){
        return orcFight;
    }

    paladin.setExperience(orcFight.getExperience());
    orcArray.shift();
    orcFight = [...orcArray].shift();
    return orcFight;
}

function run() {
    var endGame = false;
    let orcFight = getOrcFight();
    render(paladin, orcFight);
    btnAtk.addEventListener("click", (e) => {
        e.preventDefault()
        orcFight = getOrcFight();

        orcFight.takeDmg(paladin.getAtk());
        paladin.takeDmg(orcFight.getAtk());

        // Só para teste do aumento de lvl
        paladin.levelIncrease();

        if(paladin.isDead()){
            paladin.life.currentRealPoint = paladin.life.getMax();
            paladin.life.previousRealPoint = paladin.life.currentRealPoint;
            paladin.life.previousFakePoint = paladin.life.currentFakePoint;
            render(paladin, orcFight);
            return;
        }
        render(paladin, orcFight);
    })

    btnLvlUp.addEventListener("click", (e) => {
        e.preventDefault()
        let orcArrayCopy = [...orcArray];
        if(!orcArray.length){
            throw "Orc Array is empty";
        }
        
        for (const orc of orcArray) {
            orc.pressLvlUpButton()
        }

        console.log(orcArray);

        render(paladin, orcArrayCopy.shift());
    })
}

const lifeHero = new Life();
const manaHero = new Mana();

const paladin = new Paladin(characterData.hero, lifeHero, manaHero);

const orcArray = [];

for (let index = 0; index < 300; index++) {
    const lifeMoster = new Life();
    const manaMonster = new Mana();
    let orc = new Orc(characterData.monster, lifeMoster, manaMonster);
    orcArray.push(orc)
}

const btnAtk = document.getElementById("btn-atk");
const btnLvlUp = document.getElementById("btn-lvlup");
run();

