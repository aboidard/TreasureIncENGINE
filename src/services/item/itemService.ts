import getRandomInt from '../../tools/random';
import { generateItemName, generateItemDescription } from '../../tools/stringGenerator';
import { Rarity } from './rarity';

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
    let rarity = typeof Rarity;
    switch (true) {
        case (proba <= 650):
            rarity = typeof Rarity.Common;
            break;
        case (proba <= 850):
            rarity = typeof Rarity.Uncommon;
            break;
        case (proba <= 990):
            rarity = typeof Rarity.Rare;
            break;
        case (proba <= 999):
            rarity = typeof Rarity.Epic;
            break;
        case (proba == 1000):
            rarity = typeof Rarity.Legendary;
            break;
    }
    return generateRandomRarityItem(rarity);
}

export const generateRandomRarityItem = function (rarity: string) {
    let item: any = {};
    item.name = generateItemName(rarity);
    item.price = getRandomInt(1000) + 1000 * Rarity.getRarityPriceCoef(rarity);
    item.rarity = rarity.toString();
    item.description = generateItemDescription();
    item.graphics = pickOneRandomSprite();

    return item;
}
