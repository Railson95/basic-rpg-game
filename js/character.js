export default class Character{
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