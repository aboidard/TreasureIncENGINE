const { Rarity } = require('../services/item/rarity')
const { getRandomInt } = require('./random')


const FEMININ_GENDER = "F"
//private static string MASCULIN_GENDER = "M";
//private static string NEUTRAL_GENDER = "N";

expedition = [
    "Expédition,F,l'",
    "Aventure,F,l'",
    "Baroud,M,le",
    "Errance,F,l'",
    "Épisode,M,l'",
    "Épreuve,F,l'",
    "Péripétie,F,la",
    "Imprudence,F,l'",
    "Conquête,F,la",
    "Rencontre,F,la",
    "Mésaventure,F,la",
    "Équipée,F,l'",
    "Destin,M,le",
    "Entreprise,F,l'",
    "Odyssée,F,l'",
    "Évenement,M,l'"
]

adjectifExpedition = [
    "douloureux,douloureuse",
    "incroyable",
    "fructueux,fructueuse",
    "enrichissant,enrichissante",
    "rémunérateur,rémunératrice",
    "lucratif,lucrative",
    "rentable",
    "salutaire",
    "fertile",
    "productif,productive",
    "intéressant,intéressante",
    "productif,productive",
    "juteux,juteuse",
    "fécond,féconde",
    "intarissable",
    "généreux,généreuse"
]

commonItem = [
    "babiole,F,la",
    "breloque,F,la",
    "bibelot,M,le",
    "broutille,F,la",
    "bijou,M,le",
    "porte-bonheur,M,le",
    "bricole,F,la",
    "bronze,M,le",
    "curiosité,F,la",
    "étrangeté,F,l'",
    "ornement,M,l'",
    "bizarrerie,F,l'",
    "décoration,F,la"
]

rareItem = [
    "bijou,M,le",
    "porte-bonheur,M,le",
    "bronze,M,le",
    "ornement,M,l'",
    "décoration,F,la",
    "chef-d'oeuvre,M,le"
]

commonAdjectifItem = [
    "insignifiant,insignifiante",
    "inintéressant,inintéressante",
    "terne",
    "fade",
    "livide",
    "quelconque",
    "usé,usée",
    "grisâtre",
    "délavé,délavée",
    "banal,banale",
    "ordinaire",
    "courant,courante",
    "habituel,habituelle"
]

uncommonAdjectifItem = [
    "original,originale",
    "étonnant,étonnante",
    "étrange",
    "atypique",
    "inhabituel,inhabituelle",
    "singulier,singulière",
    "anormal,anormale",
    "inusuel,inusuelle",
    "insolite"
]

rareAdjectifItem = [
    "intéressant,intéressante",
    "brillant,brillante",
    "admirable",
    "précieux,précieuse",
    "remarquable",
    "surprenant,surprenante",
    "rare",
    "rarissime"
]
epicAdjectifItem = [
    "incroyable",
    "étincelant,étincelante",
    "exceptionnel,exceptionnelle",
    "spectaculaire",
    "d'exception",
    "sans pareil,sans pareille",
    "parfait,parfaite",
    "sensationnel,sensationnelle",
    "prodigieux,prodigieuse",
    "parfait,parfaite"
]

legendaryAdjectifItem = [
    "légendaire",
    "fabuleux,fabuleuse",
    "mithique",
    "fantastique",
    "transcendant,transcendante"
]

descriptionItem = [
    "Sa place est dans un musée !",
    "Objet bien mais pas top, il aurait été inventé il y a longtemps avant JC.",
    "Mais qu'est ce que c'est que cette matière ? mais c'est... c'est...",
    "Un certain professeur Johanes l'a cherché toute sa vie.",
    "De fabrication artisanale, il a été réalisé grace à un mouvement manuel rotatif en s'aidant de la région axillaire.",
    "C'est une de mes plus belle pièce...",
    "Mais commençons par le début, qu'est-ce qu'un pont suspendu ?"
]

const generateExpeditionName = function () {
    let result = ""
    let ex = expedition[getRandomInt(expedition.length)].split(',')
    result += ex[0] + " "

    let adj = adjectifExpedition[getRandomInt(adjectifExpedition.length)].split(',')
    if (adj.length > 1 && ex[1] === FEMININ_GENDER) {
        result += adj[1]
    }
    else {
        result += adj[0]
    }

    return result
}

const generateItemDescription = function () {
    return descriptionItem[getRandomInt(descriptionItem.length)];
}

const generateItemName = function (rarity) {
    let result = ""
    let adj = []
    let item = []

    switch (rarity) {
        case Rarity.Uncommon:
            adj = uncommonAdjectifItem[getRandomInt(uncommonAdjectifItem.length)].split(',')
            item = commonItem[getRandomInt(commonItem.length)].split(',')
            break
        case Rarity.Rare:
            adj = rareAdjectifItem[getRandomInt(rareAdjectifItem.length)].split(',')
            item = rareItem[getRandomInt(rareItem.length)].split(',')
            break
        case Rarity.Epic:
            adj = epicAdjectifItem[getRandomInt(epicAdjectifItem.length)].split(',')
            item = rareItem[getRandomInt(rareItem.length)].split(',')
            break
        case Rarity.Legendary:
            adj = legendaryAdjectifItem[getRandomInt(legendaryAdjectifItem.length)].split(',')
            item = rareItem[getRandomInt(rareItem.length)].split(',')
            break
        default:
            adj = commonAdjectifItem[getRandomInt(commonAdjectifItem.length)].split(',')
            item = commonItem[getRandomInt(commonItem.length)].split(',')
            break
    }

    result += item[0] + " "

    if (adj.length > 1 && item[1] === FEMININ_GENDER) {
        result += adj[1]
    }
    else {
        result += adj[0]
    }

    return result
}

module.exports = { generateItemDescription, generateItemName, generateExpeditionName }