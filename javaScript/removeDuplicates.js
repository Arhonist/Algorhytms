/**
 * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
 * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
 * Сложность задачи: 2 of 5
 * @param {Array<string | number>} array - Массив с примитивными значениями
 * @returns {Array}
 */
const unique = (array) => {
  const knownChars = [];
  return array
    .map((item) => {
      if (!knownChars.includes(item)) {
        knownChars.push(item);
        return item;
      }
    })
    .filter((item) => item !== undefined);
};

const unique2 = (array) => Array.from(new Set(array));

const unique3 = (array) =>
  array.filter((element, id) => array.indexOf(element) === id);

const data = [1, 2, 1, 2, 3];
console.log(unique(data)); // [1, 2, 3]
console.log(unique2(data)); // [1, 2, 3]
console.log(unique3(data)); // [1, 2, 3]
