import Character from "./character.js"
import characterData from "./data.js"

function render() {
    document.getElementById('hero').innerHTML = paladin.getCharacterHtml();
}

const paladin = new Character(characterData.hero);
render();