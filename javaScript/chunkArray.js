/**
 * Описание задачи: Напишите функцию, которая разделяет массив на части заданного размера.
 * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * Сложность задачи: 3 of 5
 * @param {Array} array - Массив элементов
 * @param {number} size - Размер чанков
 * @returns {Array}
 */

const chunk = (array, size) => {
  let curChunk = [];
  const outputArr = [];
  array.forEach((item, index) => {
    if (curChunk.length === size) {
      outputArr.push(curChunk);
      curChunk = [item];
      if (index === array.length - 1) outputArr.push(curChunk);
    } else {
      curChunk.push(item);
    }
  });
  return outputArr;
};

const data = [1, 2, 3, 4, 5];
console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]
