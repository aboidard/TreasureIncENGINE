const Rarity = require('../services/item/rarity')
const { getRandomInt } = require('./random')


const FEMININ_GENDER = "F"

const expedition = [
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

const adjectifExpedition = [
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

const commonItem = [
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

const rareItem = [
    "bijou,M,le",
    "porte-bonheur,M,le",
    "bronze,M,le",
    "ornement,M,l'",
    "décoration,F,la",
    "chef-d'oeuvre,M,le"
]

const commonAdjectifItem = [
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

const uncommonAdjectifItem = [
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

const rareAdjectifItem = [
    "intéressant,intéressante",
    "brillant,brillante",
    "admirable",
    "précieux,précieuse",
    "remarquable",
    "surprenant,surprenante",
    "rare",
    "rarissime"
]
const epicAdjectifItem = [
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

const legendaryAdjectifItem = [
    "légendaire",
    "fabuleux,fabuleuse",
    "mithique",
    "fantastique",
    "transcendant,transcendante"
]

const descriptionItem = [
    "Sa place est dans un musée !",
    "Objet bien mais pas top, il aurait été inventé il y a longtemps avant JC.",
    "Mais qu'est ce que c'est que cette matière ? mais c'est... c'est...",
    "Un certain professeur Johanes l'a cherché toute sa vie.",
    "De fabrication artisanale, il a été réalisé grace à un mouvement manuel rotatif en s'aidant de la région axillaire.",
    "C'est une de mes plus belle pièce...",
    "Mais commençons par le début, qu'est-ce qu'un pont suspendu ?", ,
    "C'est un objet qui a été fabriqué par un artisan, et qui a été utilisé par un artisan.",
    "Nulle part dans le monde on ne trouve de tel objet.",
    "Incroyable, mais vrai !",
    "Bon sang mais c'est bien sûr !",
    "2,21 gigawatts !",
    "Il y a une etiquette : 'Made in China'",
    "Il y a une inscription : 'frottez moi'",
    "Il y a une inscription : 'mangez moi'",
    "Il y a une inscription : 'Lavage à la main uniquement'",
    "Il y a une inscription : 'ne pas mettre au micro-ondes'",
    "Il y a une inscription : 'ne pas mettre au four'",
    "Il y a une inscription : 'ne pas mettre au lave-vaisselle'",
    "Il y a une inscription : 'lavage 40 degrés maximum'",
    "J'ai trouvé ça dans un grenier, je ne sais pas ce que c'est...",
    "J'ai dépensé 1000 euros pour ça, c'est une arnaque !",
    "J'ai dépeché un de mes meilleurs hommes pour aller chercher ça !",
    "J'ai dépensé sans compter !",
    "On en aprend pas plus sur le lore avec cette description, on est dans dans dark souls !",
    "Semble onereux, mais en réalité très bon marché.",
    "Il y a une inscription : 'ne pas mettre au congélateur'",
    "Il y a une inscription : 'ne pas mettre au réfrigérateur'",
    "Ma grand-mère m'a donné ça, elle l'a trouvé dans un grenier.",
    "Mon grand-père en utilisait pour faire des crêpes.",
    "Utilisé par les plus grands chefs.",
    "Utile dans certaines situations.",
    "Parfaitement incassable regardez ! *crush* *crush* *crush*",
    "D'une solidité à toute épreuve.",
    "Incroyable, mais vrai !",
    "Incroyablement léger.",
    "Incroyablement lourd.",
    "Il y une étiquette sur laquelle on trouve un lien vers un site de vente en ligne.",
    "Avez-vous projeté de mettre du gameplay dans ce jeu ?",
    "Je vais vous faire une offre que vous ne pourrez refuser.",
    "Vous avez de la chance, c'est la dernière pièce de ce type.",
    "Un objet de collection.",
    "Elle se hâte trop, Burrhus, de triompher : J'embrasse mon rival, mais c'est pour l'étouffer.",
    "Il faut cultiver son jardin.",
]

export const generateExpeditionName = function () {
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

export const generateItemDescription = function () {
    return descriptionItem[getRandomInt(descriptionItem.length)];
}

export const generateItemName = function (rarity: string) {
    let result = ""
    let adj: Array<string> = []
    let item: Array<string> = []

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
