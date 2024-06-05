export default class Character{
    constructor(data) {
        Object.assign(this, data)
    }

    getCharacterHtml() {
        const {name, avatar} = this
        return `
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />`
    }
}