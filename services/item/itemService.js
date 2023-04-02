const { getRandomInt } = require('../../tools/random')
const { generateItemName, generateItemDescription } = require('../../tools/stringGenerator')
const { Rarity, rarityPriceCoef } = require('./rarity')

const generateManyRandomItems = function (nb) {
    let list = []
    for (let i = 0; i < nb; i++) {
        list.push(generateRandomItem());
    }
    return list;
}

// const equals = function(otherItem)
// {
//     if (otherItem === undefined) return false;
//     return (this.id.Equals(other.id));
// }

const generateRandomItem = function () {
    let proba = getRandomInt(1000) + 1;
    let rarity = Rarity.Common;
    switch (true) {
        case (proba <= 650):
            rarity = Rarity.Common;
            break;
        case (proba <= 850):
            rarity = Rarity.Uncommon;
            break;
        case (proba <= 990):
            rarity = Rarity.Rare;
            break;
        case (proba <= 999):
            rarity = Rarity.Epic;
            break;
        case (proba == 1000):
            rarity = Rarity.Legendary;
            break;
    }
    return generateRandomRarityItem(rarity);
}

const generateRandomRarityItem = function (rarity) {
    let item = {}
    item.name = generateItemName(rarity)
    item.price = getRandomInt(1000) + 1000 * rarityPriceCoef[rarity.toString()]
    item.rarity = rarity.toString()
    item.description = generateItemDescription()
    item.graphics = 12

    return item;
}

module.exports = { generateManyRandomItems }

//console.log(generateRandomItem().toString())
// let map = {}
// for (const r of generateRandomItems(10000)) {
//     if (map[r.toString()] === undefined)
//         map[r.toString()] = 1
//     else
//         map[r.toString()] = map[r.toString()] + 1
// }
// console.log(map)

// const getRarityPriceCoef = function (rarity) {
//     switch (rarity) {
//         case (Rarity.Common):
//             return 0
//         case (Rarity.Uncommon):
//             return 1
//         case (Rarity.Rare):
//             return 5
//         case (Rarity.Epic):
//             return 20
//         case (Rarity.Legendary):
//             return 100
//     }
// }


