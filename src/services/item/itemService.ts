import { Item } from '../../models/Item';
import { getRandomInt } from '../../tools/random';
import { generateItemName, generateItemDescription } from '../../tools/stringGenerator';
import { Rarity } from './rarity';

export const generateManyRandomItems = async function (nb: number, userId: number) {
    let list: Item[] = [];
    for (let i = 0; i < nb; i++) {
        list.push(await generateRandomItem(userId));
    }
    return list;
}

export const pickOneRandomSprite = function () {
    return getRandomInt(180);
}

export const generateRandomItem = function (userId: number) {
    let proba = getRandomInt(1000) + 1;
    let rarity: string = Rarity.Common;
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
    return generateRandomRarityItem(rarity, userId);
}

export const generateRandomRarityItem = async function (rarity: string, userId: number) {
    return await Item.create({
        name: generateItemName(rarity),
        user_id: userId,
        price: getRandomInt(1000) + 1000 * Rarity.getRarityPriceCoef(rarity),
        rarity: rarity.toString(),
        description: generateItemDescription(),
        graphics: pickOneRandomSprite()
    }, { isNewRecord: true });
}
