import characterData from "./data.js"
import Paladin from "./characters/paladin.js";
import Orc from "./characters/orc.js";
import Life from "./point/life.js";
import Mana from "./point/mana.js";

function render() {
    document.getElementById('hero').innerHTML = paladin.getCharacterHtml();
    document.getElementById('hero-status').innerHTML = paladin.getStatusHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
    document.getElementById('monster-status').innerHTML = orc.getStatusHtml();
}

function run() {
    var endGame = false;
    render(paladin, orc);
    btnAtk.addEventListener("click", (e) => {
        e.preventDefault()
        orc.showAttributes();
        paladin.showAttributes();
        orc.takeDmg(paladin.getAtk());
        paladin.takeDmg(orc.getAtk());


        // Só para teste do aumento de lvl
        paladin.levelIncrease();
        if(orc.isDead()){
            orc.life.currentRealPoint = orc.life.getMax();
            orc.life.previousRealPoint = orc.life.currentRealPoint;
            orc.life.currentFakePoint = 100;
            orc.life.previousFakePoint = orc.life.currentFakePoint;
            paladin.setExperience(orc.getExperience());
            render(paladin, orc);
            return;
        }

        if(paladin.isDead()){
            paladin.life.currentRealPoint = paladin.life.getMax();
            paladin.life.previousRealPoint = paladin.life.currentRealPoint;
            paladin.life.currentFakePoint = 100;
            paladin.life.previousFakePoint = paladin.life.currentFakePoint;
            render(paladin, orc);
            return;
        }
        render(paladin, orc);
    })

    btnLvlUp.addEventListener("click", (e) => {
        e.preventDefault()
        orc.pressLvlUpButton();
        render(paladin, orc);
    })
}

const lifeHero = new Life();
const manaHero = new Mana();

const lifeMoster = new Life();
const manaMonster = new Mana();

const paladin = new Paladin(characterData.hero, lifeHero, manaHero);
const orc = new Orc(characterData.monster, lifeMoster, manaMonster);

const btnAtk = document.getElementById("btn-atk");
const btnLvlUp = document.getElementById("btn-lvlup");
run();

