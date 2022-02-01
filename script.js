class Pokemon {
    /**
     * @type {Object}
     */
    name;
    /**
     * @type {String}
     */
    description;
    /**
     * @type {String}
     */
    image;


    constructor(name, description, image) {
        this.name = name;
        this.description = description;
        this.image = image;
    }
}

window.onload = () => {
    /**
     *
     * @type {Pokemon[]}
     */
    let pokemon = [];
    fetch("https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.slice(0,9).length; i++) {
                pokemon.push(new Pokemon(data[i].name.english, data[i].description, data[i].hires))
                //Card
                let card = document.createElement("div")
                card.className = "card m-3 flex-wrap size";
                //IMG of pokemon
                let img = document.createElement("img")
                img.className = "card-img-top"
                img.src = pokemon[i].image
                //Card body
                let cardBody = document.createElement("div")
                cardBody.className = "card-body"
                //Name of pokemon
                let h5 = document.createElement("h5")
                h5.className = "card-title"
                h5.innerText = pokemon[i].name
                //Description of pokemon
                let p = document.createElement("p")
                p.className = "card-text"
                p.innerText = pokemon[i].description
                cardBody.appendChild(h5)
                cardBody.appendChild(p)
                card.appendChild(img)
                card.appendChild(cardBody)
                let cardGroup = document.getElementById("pokemons")
                cardGroup.appendChild(card)
            }
        });
}