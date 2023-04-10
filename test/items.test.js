
const { Rarity } = require('../services/item/rarity')
const { generateManyRandomItems, pickOneRandomSprite } = require('../services/item/itemService');
const { generateExpeditionName, generateItemDescription, generateItemName } = require('../tools/stringGenerator')

beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})
describe('test rarity', () => {
    test('rarity', () => {
        const mysrarity = Rarity.Epic
        const mysrarity2 = Rarity.Common
        expect(mysrarity).not.toBeUndefined()
        expect(mysrarity).not.toEqual(mysrarity2)
        expect(mysrarity).toEqual(Rarity.Epic)
        expect(mysrarity).not.toEqual("Epic")
        expect(mysrarity.toString()).toEqual('Epic')
    })
})

describe('test graphics', () => {
    test('graphics', () => {
        const graphics = pickOneRandomSprite()
        expect(graphics).not.toBeUndefined()
        expect(graphics).toBeGreaterThanOrEqual(0)
        expect(graphics).toBeLessThanOrEqual(180)
    })
})

describe('test StringGenerator', () => {
    test('String generator 1 ', () => {
        expect(generateExpeditionName()).toEqual('Aventure incroyable')
        expect(generateItemName(Rarity.Common)).toEqual('breloque inintéressante')
        expect(generateItemName(Rarity.Uncommon)).toEqual('breloque étonnante')
        expect(generateItemName(Rarity.Rare)).toEqual('bijou intéressant')
        expect(generateItemName(Rarity.Epic)).toEqual('bijou étincelant')
        expect(generateItemName(Rarity.Legendary)).toEqual('bijou légendaire')
        expect(generateItemDescription()).toEqual('Sa place est dans un musée !')
    })
    describe('test feminin', () => {
        // S'applique uniquement aux tests de ce bloc describe
        beforeEach(() => {
            jest.spyOn(global.Math, 'random').mockReturnValue(0.623456789);
        })
        test('String generator 2 ', () => {
            expect(generateExpeditionName()).toEqual('Rencontre productive')
        })
    })
})

describe('test items', () => {
    test('items ', () => {
        expect(generateManyRandomItems(1)).toEqual([{ "description": "Sa place est dans un musée !", "graphics": 22, "name": "breloque inintéressante", "price": 123, "rarity": "Common" }])
    })
})

