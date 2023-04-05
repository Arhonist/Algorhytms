// Сумма свойств объекта
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

// Например:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// console.log( sumSalaries(salaries) ); // 650

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let totalSalary = 0;
  for (let salary of Object.values(salaries)) {
    totalSalary += salary;
  }
  return totalSalary;
}

function sumSalaries2(salaries) {
  return Object.values(salaries).reduce((acc, value) => (acc += value), 0);
}

console.log(sumSalaries(salaries)); // 650
console.log(sumSalaries2(salaries)); // 650
