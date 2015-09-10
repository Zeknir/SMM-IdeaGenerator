var style = ["Super Mario Bros", "Super Mario Bros 3", "Super Mario World", "New Super Mario Bros U"];
var environents = ["Overworld", "Underground", "Water", "Ghost House", "Airship", "Castle"];

var objects = ["Blocks", "Mushrooms", "Coins", "Springboards", "Goombas", "Koopas", "Piranha Plants", "Lakitus", "Clouds", "Spinys", "Moving platforms",
               "Fireflowers", "Stars", "Bullet Bills", "Bill Blasters", "Bloopers", "Cheep-cheep", "Hammer Bros", "Buzzy Beetles", "Thwomps", "Podoboos", "Bowser", "Bowser Jr.",
               "Noteblocks", "Musicblocks", "Skull platforms", "Firebars", "Rocky Wrenches", "Monty Moles", "Bob-ombs", "Donut Blocks", "POW-Blocks", "Firethrowers", "Cannons", "Spike Tops", "Boos", "Dry Bones",
               "Kameks", "Hidden blocks", "Munchers", "Wigglers", "Clowncars", "Chain Chomps", "Spiny helmet", "Beetle helmet"];
var nsmbuOnlyObjects = ["Propeller Mushrooms"];
var smwOnlyObjects = ["Feathers"];
var smb3OnlyObjects = ["Tanookis"];
var smbOnlyObjects = [""];

var mechanics = ["Pipes", "Platforms", "Vines", "Doors", "Spikes", "Yoshis", "Kuribo's Shoe", "Rails", "Conveyor belts", "Sawblades", "Ice blocks",
                "Oneway blocks"];
var nsmbuOnlyMechanics = ["Wall-jumping", "Ground-pounding", "Spin-jumping"];
var smwOnlyMechanics = ["Spin-jumping"];
var smbOnlyMechanics = ["Costumes"];

var additionalMechanics = ["Scrolling", "Fast scrolling", "Slow scrolling", "Short time", "Sound effects", "Mazes", "Puzzles"];

function generate() {

    var outputStyleElement = document.getElementById("ideaStyle");
    var styleId = getRandom(0, style.length - 1);
    outputStyleElement.innerHTML = getStyle(styleId);

    var outputTypeElement = document.getElementById("ideaType");
    outputTypeElement.innerHTML = getEnvironment();

    var outputContentElement = document.getElementById("ideaContent");
    var outputText = "";

    var objectCount = getRandom(1, 3);
    for (var i = 0; i < objectCount; i++) {
        if (getRandom(1, 2) === 1) {
            outputText = outputText.concat(getObject(styleId));
        } else {
            outputText = outputText.concat(getMechanic(styleId));
        }



        if (i === objectCount - 2) {
            outputText = outputText.concat(" and ");
        }
        else if (i < objectCount - 1) {
            outputText = outputText.concat(", ");
        }
    }

    if (getRandom(1, 2) === 1) {
        outputText = outputText.concat(" and ");
        outputText = outputText.concat(getAdditionalMechanic());
    }

    outputContentElement.innerHTML = outputText;
}

function getStyle(styleId) {
    var output = "";
    output = output.concat(style[styleId]);
    output = output.concat(" style");
    return output;
}

function getEnvironment() {
    var output = "";
    output = output.concat(environents[getRandom(0, environents.length - 1)]);
    output = output.concat(" level");
    return output;
}

function getObject(styleId) {
    var output = "";

    if (styleId === 0) {
        allObjects = objects.concat(smbOnlyObjects);
    }
    else if (styleId === 1) {
        allObjects = objects.concat(smb3OnlyObjects);
    }
    else if (styleId === 2) {
        allObjects = objects.concat(smwOnlyObjects);
    }
    else if (styleId === 3) {
        allObjects = objects.concat(nsmbuOnlyObjects);
    }

    output = output.concat(allObjects[getRandom(0, allObjects.length - 1)]);

    if (getRandom(1, 2) === 1) {
        if (getRandom(1, 3) === 1) {
            output = output.concat(" on rails ");
        } else {
            output = " flying ".concat(output);
        }
    }

    return output;
}

function getMechanic(styleId) {
    var output = "";
    var allMechanics;

    if (styleId === 0) {
        allMechanics = mechanics.concat(smbOnlyMechanics);
    }
    else if (styleId === 2) {
        allMechanics = mechanics.concat(smwOnlyMechanics);
    }
    else if (styleId === 3) {
        allMechanics = mechanics.concat(nsmbuOnlyMechanics);
    }
    else {
        allMechanics = mechanics;
    }

    output = allMechanics[getRandom(0, allMechanics.length - 1)];
    return output;
}

function getAdditionalMechanic() {
    var output = "";
    output = additionalMechanics[getRandom(0, additionalMechanics.length - 1)];
    return output;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}