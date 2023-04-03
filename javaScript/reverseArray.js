/**
 * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
 * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
 * Сложность задачи: 1 of 5
 * @param {Array} array - Массив любых элементов
 * @returns {Array}
 */
const reverse = (array) => {
  const resultArr = [];
  array.forEach((item, index) => (resultArr[array.length - index - 1] = item));
  return resultArr;
};

const reverse2 = (array) =>
  array.map((el, id, givenArr) => givenArr[givenArr.length - id - 1]);

const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]
