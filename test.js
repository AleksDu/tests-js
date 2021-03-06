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

// Calculator
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
