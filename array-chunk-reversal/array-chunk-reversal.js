function reverseChunks(arr, chunkSize) {
    const result = []
    for(let i=0; i<arr.length; i+=chunkSize) {
        arr.slice(i, i+chunkSize).reverse().forEach(el => result.push(el))
    }
    return result
}

console.log(reverseChunks([1, 2, 3, 4, 5, 6, 7], 3));
console.log(reverseChunks([10, 20, 30, 40, 50], 2));
console.log(reverseChunks([1, 2, 3, 4, 5], 4));