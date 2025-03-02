// filterMultiples.test.ts
import {
  filterMultiples,
  joinStrings,
  sortByProperty,
  withLogging,
} from "../clear-funcs";

describe("filterMultiples", () => {
  test("filters multiples of 2", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(filterMultiples(numbers, 2)).toEqual([2, 4, 6, 8, 10]);
  });

  test("returns empty array for no multiples", () => {
    const numbers = [1, 3, 5, 7, 9];
    expect(filterMultiples(numbers, 2)).toEqual([]);
  });

  test("handles empty array", () => {
    const numbers: number[] = [];
    expect(filterMultiples(numbers, 3)).toEqual([]);
  });

  test("handles negative numbers", () => {
    const numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
    expect(filterMultiples(numbers, -2)).toEqual([-4, -2, 0, 2, 4]);
  });
});

describe("joinStrings", () => {
  test("joins strings with space", () => {
    const strings = ["Hello", "World", "TypeScript"];
    expect(joinStrings(strings, " ")).toBe("Hello World TypeScript");
  });

  test("handles empty array", () => {
    const strings: string[] = [];
    expect(joinStrings(strings, ", ")).toBe("");
  });

  test("joins single string", () => {
    const strings = ["TypeScript"];
    expect(joinStrings(strings, " | ")).toBe("TypeScript");
  });

  test("joins with empty separator", () => {
    const strings = ["a", "b", "c"];
    expect(joinStrings(strings, "")).toBe("abc");
  });
});

describe("sortByProperty", () => {
  test("sorts by numeric property", () => {
    const users = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 20 },
    ];
    expect(sortByProperty(users, "age")).toEqual([
      { name: "Charlie", age: 20 },
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
    ]);
  });

  test("sorts by string property", () => {
    const users = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 20 },
    ];
    expect(sortByProperty(users, "name")).toEqual([
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 20 },
    ]);
  });

  test("handles missing property (undefined)", () => {
    const users = [
      { name: "Alice", age: 25 },
      { name: "Bob" }, // отсутствует свойство age
      { name: "Charlie", age: 20 },
    ];
    expect(sortByProperty(users, "age")).toEqual([
      { name: "Bob" }, // объект без свойства age
      { name: "Charlie", age: 20 },
      { name: "Alice", age: 25 },
    ]);
  });

  test("handles null values", () => {
    const users = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: null }, // свойство age равно null
      { name: "Charlie", age: 20 },
    ];
    expect(sortByProperty(users, "age")).toEqual([
      { name: "Bob", age: null }, // объект с age: null
      { name: "Charlie", age: 20 },
      { name: "Alice", age: 25 },
    ]);
  });

  test("handles mixed null and undefined values", () => {
    const users = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: null }, // свойство age равно null
      { name: "Charlie" }, // свойство age отсутствует (undefined)
      { name: "David", age: 30 },
    ];
    expect(sortByProperty(users, "age")).toEqual([
      { name: "Bob", age: null }, // объект с age: null
      { name: "Charlie" }, // объект без свойства age
      { name: "Alice", age: 25 },
      { name: "David", age: 30 },
    ]);
  });

  test("handles all null values", () => {
    const users = [
      { name: "Alice", age: null },
      { name: "Bob", age: null },
      { name: "Charlie", age: null },
    ];
    expect(sortByProperty(users, "age")).toEqual([
      { name: "Alice", age: null },
      { name: "Bob", age: null },
      { name: "Charlie", age: null },
    ]);
  });

  test("handles mixed types (numbers and strings)", () => {
    const items = [
      { id: 1, value: 10 },
      { id: 2, value: "20" }, // строка
      { id: 3, value: 5 },
    ];
    expect(sortByProperty(items, "value")).toEqual([
      { id: 3, value: 5 },
      { id: 1, value: 10 },
      { id: 2, value: "20" }, // строка сортируется после чисел
    ]);
  });

  test("handles empty array", () => {
    const users: { name: string; age?: number }[] = [];
    expect(sortByProperty(users, "age")).toEqual([]);
  });

  test("handles boolean values", () => {
    const items = [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: true },
    ];
    expect(sortByProperty(items, "active")).toEqual([
      { id: 2, active: false }, // false идет перед true
      { id: 1, active: true },
      { id: 3, active: true },
    ]);
  });

  test("handles dates", () => {
    const events = [
      { name: "Event A", date: new Date("2023-01-01") },
      { name: "Event B", date: new Date("2022-01-01") },
      { name: "Event C", date: new Date("2023-06-01") },
    ];
    expect(sortByProperty(events, "date")).toEqual([
      { name: "Event B", date: new Date("2022-01-01") },
      { name: "Event A", date: new Date("2023-01-01") },
      { name: "Event C", date: new Date("2023-06-01") },
    ]);
  });
});

describe("withLogging", () => {
  test("logs function call and result", () => {
    const add = (a: number, b: number) => a + b;
    const addWithLogging = withLogging(add);

    // Mock console.log
    const consoleSpy = jest.spyOn(console, "log");

    const result = addWithLogging(3, 4);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Calling function with arguments: [3,4]"
    );
    expect(consoleSpy).toHaveBeenCalledWith("Function returned: 7");
    expect(result).toBe(7);

    // Restore console.log
    consoleSpy.mockRestore();
  });
});
