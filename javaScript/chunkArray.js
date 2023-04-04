/**
 * Описание задачи: Напишите функцию, которая разделяет массив на части заданного размера.
 * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * Сложность задачи: 3 of 5
 * @param {Array} array - Массив элементов
 * @param {number} size - Размер чанков
 * @returns {Array}
 */

const chunk = (array, size) => {
  const outputArr = [];
  for (let i = 0; i < array.length; i += size) {
    outputArr.push(array.slice(i, i + size));
  }
  return outputArr;
};

const data = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]
