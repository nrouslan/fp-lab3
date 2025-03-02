export function filterMultiples(numbers: number[], divisor: number): number[] {
  return numbers.filter((num) => num % divisor === 0);
}

export function joinStrings(strings: string[], separator: string): string {
  return strings.join(separator);
}

export function sortByProperty<T>(objects: T[], property: keyof T): T[] {
  return objects.slice().sort((a, b) => {
    const aValue = a[property];
    const bValue = b[property];

    // Если оба значения null или undefined, сохраняем исходный порядок
    if (aValue == null && bValue == null) return 0;

    // Если aValue null или undefined, помещаем его перед bValue
    if (aValue == null) return -1;

    // Если bValue null или undefined, помещаем его после aValue
    if (bValue == null) return 1;

    // Сравниваем значения свойства
    if (aValue < bValue) return -1;
    if (aValue > bValue) return 1;
    return 0;
  });
}

export function withLogging<F extends (...args: any[]) => any>(
  func: F
): (...args: Parameters<F>) => ReturnType<F> {
  return (...args: Parameters<F>): ReturnType<F> => {
    console.log(`Calling function with arguments: ${JSON.stringify(args)}`);
    const result = func(...args);
    console.log(`Function returned: ${JSON.stringify(result)}`);
    return result;
  };
}
