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
}