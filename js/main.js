import Character from "./character.js"
import characterData from "./data.js"

function render() {
    document.getElementById('hero').innerHTML = paladin.getCharacterHtml();
    document.getElementById('hero-status').innerHTML = paladin.getStatusHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
    document.getElementById('monster-status').innerHTML = orc.getStatusHtml();
}

const paladin = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();