class Dwarf{
    name: string;
    lastReaction: string;
    addDwarfReaction: string;
    leaveReaction: string;

    constructor(name: string, lastReaction: string, addDwarfReaction: string, leaveReaction: string){
        this.name = name;
        this.lastReaction = lastReaction;
        this.addDwarfReaction = addDwarfReaction;
        this.leaveReaction = leaveReaction;
    }
}

let doc = new Dwarf(
    "Brille",
    "Brille undrer sig over hvor de andre er. Er de kommet galt afsted? Han går ud og leder efter dem.",
    "Brille ville gerne snakke med %s. \"Hvor er du, %s?\" råber han.",
    "Brille er træt af de andre. De må klare sig selv uden ham, mens han lige går en tur."
);

let grumpty = new Dwarf(
    "Gnavpot",
    "Gnavpot er træt af at de andre igen har efterladt ham! Han går surt sin vej.",
    "Gnavpot er meget sur og får råbt så højt at han vækker %s.",
    "Gnavpot gider ikke de andre mere og går sin vej."
);
let happy = new Dwarf(
    "Lystig",
    "Lystig synes det er kedeligt uden de andre. Han går ud og leder efter dem.",
    "Lystig sætter noget musik på og begynder at danse. Musikken får %s til at komme hen til Lystig.",
    "Lystig har hørt at der er en fest i skoven, og render ud og prøver at finde den."
);
let sneezy = new Dwarf (
    "Prosit",
    "Prosit ved ikke hvor de andre er. Han prøver at lede efter dem.",
    "Posit nyser meget højt og får vækket %s.",
    "Der er kommet mere pollen i luften og Prosit bliver nød til at gå ind og lægge sig."
);


/*let bashful = new Dwarf("Flovmand",
"",
"",
""
);
let sleepy = new Dwarf("Søvnig",
"",
"",
""
);
let dopey = new Dwarf("Dumpe",
"",
"",
""
); */

function addDwarf(){
    let newDwarf: Dwarf = dwarfs[Math.floor(Math.random() * dwarfs.length)];
    while (dwarfsInRoom.includes(newDwarf)) {
        newDwarf = dwarfs[Math.floor(Math.random() * dwarfs.length)];
    }
    dwarfsInRoom.push(newDwarf);
}

let dwarfs: Dwarf[] = [doc, grumpty, happy, sneezy];
let dwarfsInRoom: Dwarf[] = [];

addDwarf();
addDwarf();

while (dwarfsInRoom.length > 0) {
    console.log(dwarfsInRoom.map(d => d.name));
    let dwarf: Dwarf = dwarfsInRoom[dwarfsInRoom.length - 1];
    
    if (dwarfsInRoom.length === 1){
        console.log(dwarf.lastReaction);
        break;
    }

    if (Math.random() < 0.5 && dwarfsInRoom.length < 4) {
        addDwarf();
        console.log(dwarf.addDwarfReaction.replace(/%s/g, dwarfsInRoom[dwarfsInRoom.length - 1].name));
    } else {
        console.log(dwarf.leaveReaction);
        dwarfsInRoom.pop();
    }
}
