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
    render(paladin, orc);
    btnAtk.addEventListener("click", (e) => {
        e.preventDefault()
        orc.takeDmg(paladin.getAtk());
        render(paladin, orc);
        paladin.takeDmg(orc.getAtk());
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
run();

