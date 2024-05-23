import Manager from "./manager.js";
const button_add_character = document.getElementById("button_add_character");
const button_kill_fallens = document.getElementById("button_kill_fallens");
const button_create_fallens = document.getElementById("button_create_fallens");

button_add_character.addEventListener("click", (e) => {
    e.preventDefault();
    const manager = new Manager();
    manager.add_character();
})

button_kill_fallens.addEventListener("click", (e) => {
    e.preventDefault();
    const manager = new Manager();
    manager.kill_fallens();
})

button_create_fallens.addEventListener("click", (e) => {
    e.preventDefault();
    const manager = new Manager();
    manager.create_fallens();
})




