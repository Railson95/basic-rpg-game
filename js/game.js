let characters = [];

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
}

const manager = new Manager();
