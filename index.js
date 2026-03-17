function getHCF(a, b) {
    //Find all factors of "a" and return an array
    let arrayA = findFactors(a)
    //Find all factors of "b" and return an array
    let arrayB = findFactors(b)
    //Find the hcf
    let hcf
    if (arrayA.length < arrayB.length) {
        hcf = getHighestCommonFactor(arrayA, arrayB)
        return hcf
    }
    hcf = getHighestCommonFactor(arrayB, arrayA)
    return hcf
}

function findFactors(num) {
    //Find the square root of the num
    //Floor it for numbers which aren't a perfect square
    const squareRoot = Math.floor(Math.sqrt(num))
    let factors = []

    for (let i=1; i <= squareRoot; i++) {
        if (num % i == 0) {
            factors.push(i)
        }
    }

    const length = factors.length
    let pairFactor
    for (let i=length - 1; i >= 0; i--) {
        pairFactor = num/factors[i]
        if (!(pairFactor == factors[i])) {
            factors.push(pairFactor)
        }
    }
    return factors
}

//Get the highest common factor from the two arrays
function getHighestCommonFactor(a, b) {
    for (let i = a.length - 1; i >= 0; i--) {
        if (b.includes(a[i])) {
            return a[i]
        }
    }
}

module.exports = getHCF