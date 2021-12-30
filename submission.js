const findSum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const findFrequency = function(array) {
  let counter = 0;
  let amount = 0;
  let mostFrequentItem;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        counter++; 
      }
      if (counter > amount) {
        amount = counter;
        mostFrequentItem = array[j];
      } 
    }
    counter = 0;
  }
let leastCounter = 0;
  let leastAmount = 2;
  let leastFrequentItem;
  for (k = 0; k < array.length; k++) {
    for (l = 0; l < array.length; l++) {
      if (array[k] === array[l]) {
        leastCounter++;
      } if (leastCounter < leastAmount) {
        leastAmount = leastCounter;
        leastFrequentItem = array[l];
      }
    }
    leastCounter = 0;
  }
const frequencyObj = {};
  frequencyObj['most'] = mostFrequentItem;
  frequencyObj['least'] = leastFrequentItem;

  return frequencyObj;
};

const isPalindrome = function(str) {
  let reverseWord = str.toLowerCase().split('').reverse().join('')
  if (reverseWord === str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

const largestPair = function(array) {
  let x = 0;
  let y = 0;
  let product = 0;
  let highestProduct = 0;

  for (let i = 0; i < array.length; i++) {
    x = array[i];
    y = array [i + 1];
    product = x * y;
    if (product > highestProduct) {
      highestProduct = product;
    }
  }
  return highestProduct;
};

const removeParenth = function(str) {
  let newString = str.split('');
  let newArray = [];
  let counter = 0;
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === '(') {
      counter++;
    }
    if (counter === 0) {
      newArray.push(newString[i])
    }
    if (newString[i] === ')') {
      counter--;
    }
  }
  return newArray.join('');
};

const scoreScrabble = function(str) {
  let score = 0;
  for (let i = 0; i < str.length; i++) {
   if (str[i] === 'a' || str[i] === 'e' || str[i] === 'o' || str[i] === 'i' || str[i] === 'u' || str[i] === 'l' || str[i] === 'n' || str[i] === 'r' || str[i] === 's' ||str[i] === 't') {
     score += 1;
   }
   if (str[i] === 'd' || str[i] === 'g') {
     score += 2;
   }
   if (str[i] === 'b' || str[i] === 'c' || str[i] === 'm' || str[i] === 'p') {
     score += 3;
   }
   if (str[i] === 'f' || str[i] === 'h' || str[i] === 'v' || str[i] === 'w' || str[i] === 'y') {
     score += 4;
   }
   if (str[i] === 'k') {
     score += 5;
   }
   if (str[i] === 'j' || str[i] === 'x') {
     score += 8;
   }
   if (str[i] === 'q' || str[i] === 'z') {
     score += 10;
   }
  }
  return score;
};
