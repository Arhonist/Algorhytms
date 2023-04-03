/**
 * Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.
 * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Сложность задачи: 2 of 5
 * @param {Array} array - массив, значения которого массивы пар
 * @returns {Array}
 */
const fromPairs = (array) => Object.fromEntries(array);

const fromPairs2 = (array) =>
  array.reduce((acc, item) => {
    acc[item[0]] = item[1];
    return acc;
  }, {});

const data = [
  ['a', 1],
  ['b', 2],
];
console.log(fromPairs(data)); // { 'a': 1, 'b': 2 }
console.log(fromPairs2(data)); // { 'a': 1, 'b': 2 }
