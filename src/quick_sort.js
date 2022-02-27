function generateArray(maxNumber) {
    function* arrayGenerator() {
        let i = 0;
        while (i <= maxNumber) {
            yield i++;
        }
    }
    return [...arrayGenerator()];
}

function shuffleArray(array) {
    for (let firstElementIndex = array.length - 1; firstElementIndex > 0; firstElementIndex--) {
        const secondElementIndex = Math.floor(Math.random() * (firstElementIndex + 1));
        [array[firstElementIndex], array[secondElementIndex]] = [array[secondElementIndex], array[firstElementIndex]]
    }
}

function quick_sort(sortedArray) {
    iterationCounter++;
    if (sortedArray.length <= 1) {
        return sortedArray;
    }

    const arraySupportElement = sortedArray.splice(Math.floor(Math.random() * sortedArray.length), 1);

    const lessArray = [];
    const muchArray = [];
    sortedArray.forEach(arrayElement => {
        if (arrayElement > arraySupportElement) {
            muchArray.push(arrayElement);
        } else {
            lessArray.push(arrayElement);
        }
    })
    return [...quick_sort(lessArray), ...arraySupportElement, ...quick_sort(muchArray)];
}
let iterationCounter = 0;
const testArray = generateArray(10);
console.log('originalArray', testArray)
shuffleArray(testArray)
console.log('shuffledArray', testArray);
console.log('sortedArray', quick_sort(testArray));
console.log('iterationCounter = ', iterationCounter)

