// 1.Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello world"));

// 2. Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

function sumPositiveNumbers(arr) {
  return arr.reduce((total, num) => {
    if (num > 0) {
      return total + num;
    } else {
      return total;
    }
  }, 0);
}

console.log(sumPositiveNumbers([2, -5, 10, -3, 7]));

// 3.Write a JavaScript program to find the most frequent element in an array and return it.

function findMostFrequentElement(arr) {
  let count = {};
  let maxCount = 0;
  let mostFrequentElement;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    count[element] = (count[element] || 0) + 1;
    if (count[element] > maxCount) {
      maxCount = count[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

console.log(findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));

// 4.Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 != 0) {
        return num1 / num2;
      } else {
        return "Error: Division by zero is not allowed";
      }
    default:
      return "Error: Invalid operator";
  }
}

console.log(calculator(12, "/", 4));
console.log(calculator(12, "/", 0));
console.log(calculator(7, "%", 4));

// 5. Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Error: The array must contain at least two elements.";
  }

  let smallest;
  let secondSmallest;

  if (arr[0] < arr[1]) {
    smallest = arr[0];
    secondSmallest = arr[1];
  } else {
    smallest = arr[1];
    secondSmallest = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest;
}

console.log(findSecondSmallest([3, 5, 2, 8, 1]));

//6. Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return "No two numbers add up to the target.";
}

console.log(twoSumSorted([1, 3, 6, 8, 11, 15], 9));

// 7.Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generatePassword(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

console.log(generatePassword(10));

// 8. Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    let currentNumeralValue = romanNumerals[roman[i]];
    let nextNumeralValue = romanNumerals[roman[i + 1]];

    if (nextNumeralValue > currentNumeralValue) {
      total += nextNumeralValue - currentNumeralValue;
      i++;
    } else {
      total += currentNumeralValue;
    }
  }

  return total;
}

console.log(romanToInt("IX"));
console.log(romanToInt("XXI"));
