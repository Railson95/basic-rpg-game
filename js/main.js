import Character from "./character.js"
import characterData from "./data.js"

function render() {
    document.getElementById('hero').innerHTML = paladin.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

const paladin = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();