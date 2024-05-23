let characters = [];
let fallens = [];
var num_fallens = 100;
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

class Character{
    character_name;
    character_class;
    experience_gained; //experience gained from killing 
    current_experience;
    constructor(character_name, character_class){
        this.character_name = character_name;
        this.character_class = character_class;
        this.current_experience = 0;
    }
}

class Fallen{
    id;
    name;
    level;
    dmg;
    resistence;
    exp_of_die; // experience given when dying
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.exp_of_die = 1;
    }
}

class Manager{
    constructor(){
    }

    get_character(){
        if (localStorage.getItem('characters') === null) {
            localStorage.setItem('characters', JSON.stringify(characters));
        } else {
            characters = JSON.parse(localStorage.getItem('characters'));
        }
        return characters;
    }

    add_character(){
        let character_name = document.getElementById("name");
        character_name = character_name.value;

        let character_class = document.getElementById("class");
        character_class = character_class.value;

        let character = new Character(character_name, character_class);

        const characters = this.get_character();

        characters.push(character);

        let stringArray = JSON.stringify(characters);

        localStorage.setItem('characters', stringArray);
    }

    show_character(){
        // alert("O nome: " + character_list[0].character_name + ". Tem a classe: " + character_list[0].character_class);
        alert("Ola! ");
    }

    get_fallens(){
        if (localStorage.getItem('fallens') === null) {
            localStorage.setItem('fallens', JSON.stringify(fallens));
        } else {
            fallens = JSON.parse(localStorage.getItem('fallens'));
        }
        return fallens;
    }

    create_fallens(){
        const fallens = this.get_fallens();
        let id = 0;
        for (let index = 0; index < num_fallens; index++) {
            let fallen = new Fallen("Gunar", id);

            if(fallens.length == num_fallens){
                break;
            }

            fallens.push(fallen);
            id++;
        }

        let stringArray = JSON.stringify(fallens);

        localStorage.setItem('fallens', stringArray);
    }

    kill_fallens(){
        let characters = this.get_character();
        let fallens = this.get_fallens();

        let fallen = fallens.shift();
        let character = characters.shift();
        character.current_experience += fallen.exp_of_die; 
    
        characters.unshift(character);

        let stringArray_characters = JSON.stringify(characters);
        let stringArray_fallens = JSON.stringify(fallens);

        localStorage.setItem('characters', stringArray_characters);
        localStorage.setItem('fallens', stringArray_fallens);

    }
    
}


