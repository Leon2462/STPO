import {AppMethods} from './AppMethods'

let appMethods = new AppMethods()

describe('Tests', () => {
    test('calcResult', () => {
        expect(appMethods.calcResult('100 110 120 130 -140 -150 -160 1s2 41gh 10hg')).toStrictEqual([['Некорректные элементы: 1s2, 41gh, 10hg'], false])
        expect(appMethods.calcResult('100 110 120 130 -140 -150 -160 1s2 41gh 10hg 12442')).toStrictEqual([['Введено больше 10 элементов!\n\n','Некорректные элементы: 1s2, 41gh, 10hg, 12442'], false])
        expect(appMethods.calcResult('100 110 120 130 -140 -150 -160 -170 180 190 200')).toStrictEqual([['Введено больше 10 элементов!\n\n'], false])   
        expect(appMethods.calcResult('100 110 120 130 -140 -150 -160 -170 180')).toStrictEqual(['Нет чисел удовлетворяющих условию!', true])
        expect(appMethods.calcResult('127 110 127 130 -140 127 -160 -170 127')).toStrictEqual(['Результат: 110, 130, -140, -160, -170', true])
    })
    test('deleteElems', () => {
        expect(appMethods.deleteElems([124, 125, 126, 128, 129, 130])).toStrictEqual([124, 125, 126, 128, 129, 130])
        expect(appMethods.deleteElems([127,124,127,125,127,126,127,128,127,129,127,130,127])).toStrictEqual([124, 125, 126, 128, 129, 130])
        expect(appMethods.deleteElems([127,127,127,127,127,127,127])).toStrictEqual([])
        expect(appMethods.deleteElems([])).toStrictEqual([])
    })
})