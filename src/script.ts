import {
  filterMultiples,
  joinStrings,
  sortByProperty,
  withLogging,
} from "./clear-funcs";
import { products } from "./data";

// Пример использования функции filterMultiples
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplesOf2 = filterMultiples(numbers, 2);
console.log(multiplesOf2); // [2, 4, 6, 8, 10]

// Пример использования функции joinStrings
const strings = ["Hello", "World", "TypeScript"];
const joinedString = joinStrings(strings, " ");
console.log(joinedString); // "Hello World TypeScript"

const sortedByPrice = sortByProperty(products, "price");
console.log(sortedByPrice);
// [
//   { id: 3, name: "Headphones", price: 150, ... },
//   { id: 5, name: "Smartwatch", price: 250, ... },
//   { id: 4, name: "Tablet", price: 600, ... },
//   { id: 2, name: "Smartphone", price: 800, ... },
//   { id: 1, name: "Laptop", price: 1200, ... }
// ]

// Пример использования функции withLogging
const add = (a: number, b: number) => a + b;
const addWithLogging = withLogging(add);
const sum = addWithLogging(3, 4);
// В консоли будет:
// Calling function with arguments: [3,4]
// Function returned: 7
console.log(sum); // 7
