class Character{
    character_name;
    character_class;
    constructor(character_name, character_class){
        this.character_name = character_name;
        this.character_class = character_class;
    }
}

class Manager{
    constructor(){
    }
    add_character(){
        let character_name = document.getElementById("name");
        character_name = character_name.value;

        let character_class = document.getElementById("class");
        character_class = character_class.value;

        const character = new Character();
        alert("O usuário escolheu o nome: " + character_name);
        alert("O usuário escolheu a classe: " + character_class);
    }
}

const manager = new Manager();
