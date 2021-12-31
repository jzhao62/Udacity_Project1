

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

}

const convertToFt = (feet, inch) => {
    return parseFloat(feet + inch/12)
}

const compareWeightTable = (output) => {
    const tableContainer = document.getElementById('weight_comparison_table')
    const tableRef= document.createElement('table')
    tableRef.className = "table_wrapper"


    const TableHeader = tableRef.insertRow(tableRef.rows.length);
    TableHeader.innerHTML = "<tr>\n" +
        "    <th>Dinasour Name</th>\n" +
        "    <th>Dinasour Weight(lb)</th>\n" +
        "    <th>Human Name</th>\n" +
        "    <th>Human weight(lb)</th>\n" +
        "    <th>Dinasour Weight - Human Weight(lb)</th>\n" +
        "  </tr>"

    const human = output[4]

    output.forEach((item) => {
        if (!Human.prototype.isPrototypeOf(item)){
            const row = tableRef.insertRow(tableRef.rows.length);
            row.innerHTML = "<tr>\n" +
                `   <th>${item.species}</th>\n` +
                `    <th>${item.weight}</th>\n` +
                `    <th>${human.name}</th>\n` +
                `    <th>${human.lb}</th>\n` +
                `    <th>${item.weight - human.lb}</th>\n` +
                "  </tr>"
        }

    })
    tableContainer.append(tableRef)
}

const compareHeightTable = (output)=> {
    const tableContainer = document.getElementById('weight_comparison_table')
    const tableRef= document.createElement('table')
    tableRef.className = "table_wrapper"

    const TableHeader = tableRef.insertRow(tableRef.rows.length);
    TableHeader.innerHTML = "<tr>\n" +
        "    <th>Dinasour Name</th>\n" +
        "    <th>Dinasour Height(ft)</th>\n" +
        "    <th>Human Name</th>\n" +
        "    <th>Human Height(ft)</th>\n" +
        "    <th>Height Difference(ft)</th>\n" +
        "  </tr>"



    const human = output[4]

    const humanHeight = convertToFt(human.feet, human.inches)



    output.forEach((item) => {
        if (!Human.prototype.isPrototypeOf(item)){
            const row = tableRef.insertRow(tableRef.rows.length);
            row.innerHTML = "<tr>\n" +
                `   <th>${item.species}</th>\n` +
                `    <th>${item.height}</th>\n` +
                `    <th>${human.name}</th>\n` +
                `    <th>${humanHeight}</th>\n` +
                `    <th>${item.height-humanHeight}</th>\n` +
                "  </tr>"
        }

    })
    tableContainer.append(tableRef)
}

const compareDietTable = (output)=> {
    const tableContainer = document.getElementById('weight_comparison_table')
    const tableRef= document.createElement('table')
    tableRef.className = "table_wrapper"

    const TableHeader = tableRef.insertRow(tableRef.rows.length);
    TableHeader.innerHTML = "<tr>\n" +
        "    <th>Dinasour Name</th>\n" +
        "    <th>Dinasour Diet</th>\n" +
        "    <th>Human Name</th>\n" +
        "    <th>Human Diet</th>\n" +
        "  </tr>"

    const human = output[4]
    output.forEach((item) => {
        if (!Human.prototype.isPrototypeOf(item)){
            const row = tableRef.insertRow(tableRef.rows.length);
            row.innerHTML = "<tr>\n" +
                `   <th>${item.species}</th>\n` +
                `    <th>${item.diet}</th>\n` +
                `    <th>${human.name}</th>\n` +
                `    <th>${human.diet}</th>\n` +
                "  </tr>"
        }
    })
    tableContainer.append(tableRef)
}



const onClickCompare= () => {
    document.getElementById('input_form').style.display = 'none';
    document.getElementById('dino_grid').className = 'dino_grid_container_visible'
    document.getElementById('weight_comparison_table').className = 'table_container_visible'


    const name = document.getElementById("name").value;
    const feet = document.getElementById('feet').value;
    const inches = document.getElementById('inches').value;
    const weight = document.getElementById('weight').value;
    const diet = document.getElementById('diet').value;
    const human = new Human(name, feet, inches, weight, diet)
    let totalOutputs = []
    dino.forEach((el, idx) => {
        const currDino = new Dinasour(el.species, el.weight, el.height, el.diet, el.where, el.when, el.fact, el.img)
        totalOutputs.push(currDino)
    })
    totalOutputs.push(human)

    const tmp = totalOutputs[4]
    totalOutputs[4] = totalOutputs[8]
    totalOutputs[8] = tmp;


    dino_grid = document.getElementById('dino_grid');

    totalOutputs.forEach((item)=>{
        let div = document.createElement('div')
        let li1 = document.createElement("li");
        let li2 = document.createElement("li")
        let picContainer = document.createElement('div');
        let img = document.createElement('img')
        img.className = 'img_container'
        picContainer.append(img)

        console.log(item)

        if (item.species) {
            li1.innerText = item.species
            li2.innerText = item.fact
            img.src = item.img

        }

        if (item.name) {
            li1.innerText = item.name
            li2.innerText = 'This is a human'
            img.src = "images/human.png"
        }

        div.append(li1)
        div.append(picContainer)
        div.append(li2)

        div.className = 'dino_card_container'
        dino_grid.appendChild(div);
    })


    compareWeightTable(totalOutputs)
    compareHeightTable(totalOutputs)
    compareDietTable(totalOutputs)



}






    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
