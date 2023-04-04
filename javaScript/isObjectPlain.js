// /**
//  * Описание задачи: Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.
//  * Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false
//  * Сложность задачи: 1 of 5
//  * @param element - элемент для проверки
//  * @returns {boolean}
//  */

// const isPlainObject = (element) => {
//   return Object.keys(element);
// };

// const data = [1];
// console.log(isPlainObject(data)); // true

const object1 = {
  a: '42',
  b: '58',
};

const object2 = {
  c: '4',
  d: '7',
};

console.log(Object.assign(object1, object2));
