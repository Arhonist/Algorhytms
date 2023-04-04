const inputObject = {
  a: 'z',
  b: 'y',
  c: 'x',
  d: 'w',
  e: 'v',
  f: 'u',
  g: 't',
  h: 's',
  i: 'r',
};

const reversedObject = {
  z: 'a',
  y: 'b',
  x: 'c',
  w: 'd',
  v: 'e',
  u: 'f',
  t: 'g',
  s: 'h',
  r: 'i',
};

function objKeyValReversorVer1(inputObject) {
  const outputObject = {};
  // итерация через цикл со счётчиком, ручная смена ключей и значений
  for (let i = 0; i < Object.keys(inputObject).length; i++) {
    outputObject[Object.values(inputObject)[i]] = Object.keys(inputObject)[i];
  }
  return outputObject;
}

function objKeyValReversorVer2(inputObject) {
  return Object.fromEntries(
    Object.entries(inputObject).map((item) => item.reverse())
  );
}

function testPerformance(fnToTest, testObj, targetObj) {
  const iterAmount = 10;
  let totalTestTime = 0;
  let result;

  for (let i = 0; i < iterAmount; i++) {
    const startTime = performance.now();
    result = fnToTest(testObj);
    const endTime = performance.now();
    totalTestTime += endTime - startTime;
  }

  const avgTime = totalTestTime / iterAmount;
  const isResultCorrect = JSON.stringify(result) === JSON.stringify(targetObj);

  console.log(
    `Функция отработала ${isResultCorrect ? 'верно' : 'неверно'}!\n` +
      `Функция вернула: ${JSON.stringify(result)}\n` +
      `Среднее время выполнения за ${iterAmount} итераций: ` +
      `${String(avgTime).substring(0, 5)} ms\n`
  );
}

testPerformance(objKeyValReversorVer1, inputObject, reversedObject); // Среднее время выполнения за 10 итераций: 0.017 ms
testPerformance(objKeyValReversorVer2, inputObject, reversedObject); // Среднее время выполнения за 10 итераций: 0.023 ms
