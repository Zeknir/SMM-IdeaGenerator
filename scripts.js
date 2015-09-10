var environents = ["Overworld", "Underground", "Water", "Ghost House", "Airship", "Castle"];
var objects = ["Blocks", "Mushrooms", "Coins", "Springboards", "Goombas", "Koopas", "Piranha Plants", "Feathers", "Propeller Mushrooms", "Tanookis", "Lakitus", "Spinys", "Moving platforms",
               "Fireflowers", "Stars", "Bullet Bills", "Bill Blasters", "Bloopers", "Cheep-cheep", "Hammer Bros", "Buzzy Beetles", "Thwomps", "Podoboos", "Bowser", "Bowser Jr.",
               "Noteblocks", "Skull platforms", "Firebars", "Rocky Wrenches (Moles)", "Bob-ombs", "Donut Blocks", "POW-Blocks", "Firethrowers", "Cannons", "Spike Tops", "Boos", "Dry Bones",
               "Kameks", "Hidden blocks", "Munchers", "Wigglers", "Clowncars", "Chain Chomps"];
var mechanic = ["wall-jumping", "ground-pounding", "pipes", "costumes", "platforms", "vines", "doors", "spikes", "Yoshis", "Kuribo's Shoe", "rails", "conveyor belts", "sawblades", "ice blocks",
                "oneway blocks"];
var additionalMechanic = ["scrolling", "fast scrolling", "slow scrolling", "short time", "sound effects"];

function generate() {
    var outputElement = document.getElementById("ideaText");
    var outputText = "";

    outputText = outputText.concat(getEnvironment());
    outputText = outputText.concat(" with ");

    var objectCount = getRandom(1, 2);
    for (var i = 0; i < objectCount; i++) {
        if (getRandom(1, 2) === 1) {
            outputText = outputText.concat(getObject());
        } else {
            outputText = outputText.concat(getMechanic());
        }

        if (i < objectCount - 1) {
            outputText = outputText.concat(" and ");
        }
    }

    if (getRandom(1, 6) === 1) {
        outputText = outputText.concat(" and ");
        outputText = outputText.concat(getAdditionalMechanic());
    }

    outputElement.innerHTML = outputText;
}

function getEnvironment() {
    var output = "";
    output = output.concat(environents[getRandom(0, environents.length - 1)]);
    output = output.concat(" level");
    return output;
}

function getObject() {
    var output = "";

    output = output.concat(objects[getRandom(0, objects.length - 1)]);

    if (getRandom(1, 2) === 1) {
        if (getRandom(1, 3) === 1) {
            output = output.concat(" on rails ");
        } else {
            output = " flying ".concat(output);
        }
    }

    return output;
}

function getMechanic() {
    var output = "";
    output = mechanic[getRandom(0, mechanic.length - 1)];
    return output;
}

function getAdditionalMechanic() {
    var output = "";
    output = additionalMechanic[getRandom(0, additionalMechanic.length - 1)];
    return output;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
