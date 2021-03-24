import {AppMethods} from './AppMethods'

let appMethods = new AppMethods()

describe('Tests', () => {
    test('isPrime', () => {
        expect(appMethods.isPrime(10)).toStrictEqual(false)
        expect(appMethods.isPrime(1)).toStrictEqual(false)
        expect(appMethods.isPrime(0)).toStrictEqual(false)
        expect(appMethods.isPrime(-10)).toStrictEqual(false)
        expect(appMethods.isPrime(11)).toStrictEqual(true)
    })
    test('isPowerOfTwo', () => {
        expect(appMethods.isPowerOfTwo(15)).toStrictEqual(false)
        expect(appMethods.isPowerOfTwo(0)).toStrictEqual(false)
        expect(appMethods.isPowerOfTwo(-15)).toStrictEqual(false)
        expect(appMethods.isPowerOfTwo(128)).toStrictEqual(true)
    })
    test('findPowerOfTwo', () => {
        expect(appMethods.findPowerOfTwo(10)).toStrictEqual(3.3219280948873626)
        expect(appMethods.findPowerOfTwo(0)).toStrictEqual(-Infinity)
        expect(appMethods.findPowerOfTwo(1.5)).toStrictEqual(0.5849625007211562)
        expect(appMethods.findPowerOfTwo(0.25)).toStrictEqual(-2)
        expect(appMethods.findPowerOfTwo(8)).toStrictEqual(3)
    })
    test('parsData', () => {
        expect(appMethods.parseData('asffq 1234 100 f21 1 127')).toStrictEqual([['asffq', '1234', 100, 'f21', '1', 127],['asffq', '1234', 'f21', '1']])
        expect(appMethods.parseData('100 101 102 -103 -104 -105')).toStrictEqual([[100, 101, 102, -103, -104, -105],[]])
        expect(appMethods.parseData('')).toStrictEqual([[],[]])
        expect(appMethods.parseData('s12 51ag 5gah h201 saf21')).toStrictEqual([['s12', '51ag', '5gah', 'h201', 'saf21'],['s12', '51ag', '5gah', 'h201', 'saf21']])
    })
})
