export default class Fallen{
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