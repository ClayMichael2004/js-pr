function bubbleSortAnalyzer(arr, comparator) {
    let n = arr.length;
    let swapCount = 0;
    let iterations = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            iterations++;
            if (comparator(arr[j], arr[j + 1]) > 0) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapCount++;
            }
        }
    }

    return {
        sortedArray: arr,
        swapCount: swapCount,
        iterations: iterations
    };
}

const comparator = (a, b) => a - b;

const result = bubbleSortAnalyzer([4, 2, 7, 1, 3], comparator);

console.log(result);