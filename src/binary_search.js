function generateArray(maxNumber) {
    function* arrayGenerator() {
        let i = 0;
        while (i <= maxNumber) {
            yield i++;
        }
    }
    return [...arrayGenerator()];
}

function binarySearch(desiredNumber, numbersArray) {
    searchCallCounter++;
    const arrayMiddle = Math.floor(numbersArray.length / 2);
    const middleArrayNumber = numbersArray[arrayMiddle];
    console.log('middleArrayNumber', middleArrayNumber)
    if (middleArrayNumber === desiredNumber) {
        return middleArrayNumber;
    }
    if (middleArrayNumber > desiredNumber) {
        return binarySearch(desiredNumber, numbersArray.slice(0, arrayMiddle))
    } else {
        return binarySearch(desiredNumber, numbersArray.slice(arrayMiddle + 1))
    }
}

const testArray = generateArray(100);
const desiredNumber = Math.floor(Math.random() * testArray.length);
let searchCallCounter = 0;

console.log('array length = ', testArray.length);
console.log('desired number: ', desiredNumber);

const resultText = `Number found! It is ${binarySearch(desiredNumber, testArray)}`;

console.log(resultText);
console.log(`Функция была вызвана ${searchCallCounter} раз/раза`);
