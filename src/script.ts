import {
  filterMultiples,
  joinStrings,
  sortByProperty,
  withLogging,
} from "./clear-funcs";
import { products } from "./data";

/// --- Пункт 1.1.

// Пример использования функции filterMultiples
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("--> numbers: ");
console.log(numbers);

const multiplesOf2 = filterMultiples(numbers, 2);
console.log("--> : filterMultiples(numbers, 2)");
console.log(multiplesOf2); // [2, 4, 6, 8, 10]

/// --- Пункт 1.2.

// Пример использования функции joinStrings
const strings = ["Hello", "World", "TypeScript"];
console.log("--> strings: ");
console.log(strings);

const joinedString = joinStrings(strings, " ");
console.log("--> joinStrings(strings, ' '): ");
console.log(joinedString); // "Hello World TypeScript"

/// --- Пункт 1.3.

// Пример использования функции sortByProperty
console.log("--> products: ");
console.table(products);

const sortedByPrice = sortByProperty(products, "price");
console.log("--> : sortByProperty(products, 'price')");
console.table(sortedByPrice);
// [
//   { id: 3, name: "Headphones", price: 150, ... },
//   { id: 5, name: "Smartwatch", price: 250, ... },
//   { id: 4, name: "Tablet", price: 600, ... },
//   { id: 2, name: "Smartphone", price: 800, ... },
//   { id: 1, name: "Laptop", price: 1200, ... }
// ]

/// --- Пункт 2.

// Пример использования функции withLogging
const add = (a: number, b: number) => a + b;
console.log("--> add: ");
console.log(add.toString());

const addWithLogging = withLogging(add);
const sum = addWithLogging(3, 4);
// В консоли будет:
// Calling function with arguments: [3,4]
// Function returned: 7

console.log("--> sum: ");
console.log(sum); // 7
