import { getRandomInt } from '../../tools/random';
import { generateItemName, generateItemDescription } from '../../tools/stringGenerator';
import { Rarity, rarityPriceCoef } from './rarity';

export const generateManyRandomItems = function (nb: number) {
    let list: any[] = [];
    for (let i = 0; i < nb; i++) {
        list.push(generateRandomItem());
    }
    return list;
}

export const pickOneRandomSprite = function () {
    return getRandomInt(180);
}

export const generateRandomItem = function () {
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

export const generateRandomRarityItem = function (rarity: Rarity) {
    let item: any = {};
    item.name = generateItemName(rarity);
    item.price = getRandomInt(1000) + 1000 * rarityPriceCoef[rarity.toString()];
    item.rarity = rarity.toString();
    item.description = generateItemDescription();
    item.graphics = pickOneRandomSprite();

    return item;
}
