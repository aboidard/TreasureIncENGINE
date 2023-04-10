const enumValue = (name) => Object.freeze({ toString: () => name });
const Rarity = Object.freeze({
    Common: enumValue("Common"), //0
    Uncommon: enumValue("Uncommon"), //1
    Rare: enumValue("Rare"), //5
    Epic: enumValue("Epic"), //20
    Legendary: enumValue("Legendary") //100
});

const rarityPriceCoef = { "Common": 0, "Uncommon": 1, Rare: 5, Epic: 20, Legendary: 100 }

module.exports = { Rarity, rarityPriceCoef }