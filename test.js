describe("pow", function () {
  it("2 в степени 3 будет 8", function () {
    assert.equal(pow(2, 3), 8);
  });

  it("3 в степени 3 будет 27", function () {
    assert.equal(pow(3, 3), 27);
  });

  describe("Возводит х в степень 3", function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }
    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  describe("n возвращает NaN", function () {
    it("для отрицательных n возвращает NaN", function () {
      assert.isNaN(pow(2, -1));
    });

    it("для дробных n возвращает NaN", function () {
      assert.isNaN(pow(2, 1.5));
    });
  });
});

// Zamikanie!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function makeCounter(initial = o) {
//   let counter = initial;
//   return function () {
//     return (counter += 1);
//   };
// }

// const counterA = makeCounter(20);
// console.log(counterA());
// console.log(counterA());

// const input = [1, 2, 3, 4];
// function reverses(array) {
//   let output = [];
//   while (array.length) {
//     output.push(array.pop());
//   }
//   return output;
// }
// console.log(reverses(input));

// Задача на тестах
// const input = [1, 2, 3, 4].reduce(function (acc, current) {
//   acc.unshift(current);
//   return acc;
// }, []);
// console.log(input);
