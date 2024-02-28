// this indicates current context.

const superhero = {
    marvel : "Thor",
    power : "God of Thunder",
    ability: function(){
        // console.log(`${this.power} >>> ${this.marvel}`);
        // console.log(this);
    }
}
superhero.ability();
superhero.marvel = "Ironman";
superhero.power = "Technology";
superhero.ability()

// console.log(this); // empty {} in global "this" within node whereas return "window" in brower


function heros(){
    let marvel = "Antman"
    console.log(this.marvel); // cant work in function but hold some eventhandlers
}
heros()

const hero = () => {
    let dc = "Wonder Woman"
    console.log(this); // cant work in function, hold {} empty object.
}
hero()
