/*const enumValue = (name: string) => Object.freeze({ toString: () => name });
const Rarity = Object.freeze({
    Common: enumValue("Common"), //0
    Uncommon: enumValue("Uncommon"), //1
    Rare: enumValue("Rare"), //5
    Epic: enumValue("Epic"), //20
    Legendary: enumValue("Legendary") //100
});


module.exports = { Rarity, rarityPriceCoef }*/

export class Rarity {
    static Common = "Common";
    static Uncommon = "Uncommon";
    static Rare = "Rare";
    static Epic = "Epic";
    static Legendary = "Legendary";

    static getRarityPriceCoef(rarity: string) {
        switch (rarity) {
            case Rarity.Common:
                return 1;
            case Rarity.Uncommon:
                return 2;
            case Rarity.Rare:
                return 5;
            case Rarity.Epic:
                return 20;
            case Rarity.Legendary:
                return 100;
            default:
                return 1;
        }
    }

}
