const fizzbuzz = (n) => {
    if (typeof n !== "number") {
        throw new Error ('fizbuzz needs a number')
    }
    if (n % 15 === 0) return "FizzBuzz"
    if (n % 3 === 0) return "Fizz"
    if (n % 5 === 0) return "Buzz"
    return n;
}


module.exports = fizzbuzz;