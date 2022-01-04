
const dino = [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh",
            'img': 'images/triceratops.png'
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long.",
            'img': 'images/tyrannosaurus rex.png'
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years.",
            "img": "images/anklyosaurus.png"
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991.",
            "img": "images/brachiosaurus.png"
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
            "img": "images/stegosaurus.png"
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas.",
            "img": "images/elasmosaurus.png"
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur.",
            "img": "images/pteranodon.png"
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs.",
            "img": "images/pigeon.png"
        }
    ]

class Human {
    name = 'Default Name';
    feet = 0
    inches = 0
    lb = 0
    diet = 'Default Diet'

    constructor(name, feet, inches, lb, diet) {
        this.name = name === "" ? this.name: name;
        this.feet = feet === "" ? this.feet: feet;
        this.inches = inches === "" ? this.inches: inches;
        this.lb = lb === "" ? this.lb : lb;
        this.diet = diet === ""? this.diet : diet

    }
}

function Bird() {
    this.canFly = 'yes';
}

class Dinasour {
    species = ''
    weight = 0
    height = 0
    diet = ''
    where = ''
    when = ''
    fact = ''
    img = ""
    constructor(species, weight, height, diet, where, when, fact, img) {
        this.species = species
        this.weight = weight
        this.height = height
        this.diet = diet
        this.where = where
        this.when = when
        this.fact = fact
        this.img = img;
    }
    compareHeight = (human) => {
        const convertToFt = (feet, inch) => {
            return parseFloat(feet) + parseFloat(inch)/12
        }
        return `${this.species} is taller than human for ${this.height - convertToFt(human.feet, human.inches)} feet`
    }
    // used to generate a comparision between weight fact
    compareWeight = (human) => {
        return `${this.species} is heavier than human for  ${this.weight-human.lb} lb`
    }

    // used to generate a comparision between dit
    compareDiet = (human) => {
        return `${this.species} is ${this.diet} while human is ${human.diet}`
    }
}


// shuffle to display fact or comparison facts everytimes the page was loaded
const shuffleFactToDisplay = (dino, human) => {
    const comparingFact = [dino.compareHeight(human), dino.compareWeight(human), dino.compareDiet(human), dino.fact, dino.when]
    return comparingFact[Math.floor(Math.random() * comparingFact.length)]
}


const onClickCompare= () => {
    document.getElementById('input_form').style.display = 'none';
    document.getElementById('dino_grid').className = 'dino_grid_container_visible'

    // collect input data and build human obj
    const name = document.getElementById("name").value;
    const feet = document.getElementById('feet').value;
    const inches = document.getElementById('inches').value;
    const weight = document.getElementById('weight').value;
    const diet = document.getElementById('diet').value;
    const currentHuman = new Human(name, feet, inches, weight, diet)


    // generate dino objects and put human in index4, and display cards in a flex layout
    let totalOutputs = []
    dino.forEach((el, idx) => {
        const currDino = new Dinasour(el.species, el.weight, el.height, el.diet, el.where, el.when, el.fact, el.img)
        if (currDino.species.toLowerCase() === 'pigeon'){

            // if pigion, set its prototype to bird, instead of default dinasour
            Object.setPrototypeOf(currDino, new Bird())
        }
        totalOutputs.push(currDino)
    })
    totalOutputs.push(currentHuman)

    const tmp = totalOutputs[4]
    totalOutputs[4] = totalOutputs[8]
    totalOutputs[8] = tmp;



    // prepare the grids container
    dino_grid = document.getElementById('dino_grid');


    // prepare html skeletons and put in facts
    totalOutputs.forEach((item)=>{
        let dino_card_container = document.createElement('div')
        let li1 = document.createElement("li");
        let li2 = document.createElement("li")
        let picContainer = document.createElement('div');
        let img = document.createElement('img')
        img.className = 'img_container'
        picContainer.append(img)

        // if the prototype is human
        if (Human.prototype.isPrototypeOf(item)) {
            li1.innerText = item.name
            li2.innerText = 'there is no fact to be displayed'
            img.src = "images/human.png"
        }

        // if prototype is bird
        if(Bird.prototype.isPrototypeOf(item)) {
            li1.innerText = item.species
            li2.innerText = item.fact
            img.src = item.img
        }
        // if the item is dino
        if(Dinasour.prototype.isPrototypeOf(item)) {
            li1.innerText = item.species
            li2.innerText = shuffleFactToDisplay(item, currentHuman)
            img.src = item.img
        }

        dino_card_container.append(li1)
        dino_card_container.append(picContainer)
        dino_card_container.append(li2)

        dino_card_container.className = 'dino_card_container'
        dino_grid.appendChild(dino_card_container);
    })
}