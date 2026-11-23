function divisors(n) {
    let divisorList = [];
    if (n <= 0) {
        n=n*-1
    }
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            divisorList.push(i);
        }
    }
    return divisorList;
}

console.log(divisors(15));
console.log(divisors(28));
console.log(divisors(1));
console.log(divisors(-15));