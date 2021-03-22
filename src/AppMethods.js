export class AppMethods {

    isPrime(num) {
        let n = parseInt(num)
        let s = Math.sqrt(n)
        if (n <= 1) return false;
        for (let i = 2; i <= s; i++) {
            if (n % i === 0) return false
        }
        return true
    }

    isPowerOfTwo(num) {
        let n = parseInt(num)
        return Boolean(!!n & !(n & (n - 1)))
    }

    deleteElems(array) {
        return array.filter( e => 
            !this.isPowerOfTwo(parseInt(e)+1) 
            || !this.isPrime(e) 
            || !this.isPrime(this.findPowerOfTwo(parseInt(e)+1)))
    }
    
    findPowerOfTwo(num) {
        return Math.log(num) / Math.log(2)
    }

    parseData(inputValue) {
        const array = inputValue.split(' ').filter( n=>n )
        const errorElements = [] 
        array.forEach((item,ind) => {
            if (Math.abs(+item) >= 100 && Math.abs(+item) <= 999 && Number.isInteger(+item)) {
                array[ind] = parseInt(item)
            } else {
                errorElements.push(item)
            }
        })
        return [array, errorElements]
    }
    
    calcResult(inputValue) {
        const data = this.parseData(inputValue)
        const nums = data[0]
        const errorElements = data[1]
        let errorMessages = []
        if (nums.length > 10) {
            errorMessages.push('Введено больше 10 элементов!\n\n')
        }
        if (errorElements.length) {
            errorMessages.push('Некорректные элементы: ' + errorElements.join(', '))
        }
        if (errorMessages.length) {
            return [errorMessages, false]
        }
        else {
            const result = this.deleteElems(nums)
            if (result.join() === nums.join()) {
                return ['Нет чисел удовлетворяющих условию!',true]
            }
            else if (result){
                return ['Результат: ' + this.deleteElems(nums).join(), true]
            }
        }
    }
}