// TODO: Fix the errors in the functions below!

const functions = {
  sum(a, b) {
    // Todo use typeof and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    throw Error("Type is not valid");
  },

  doubleNumbersInArray: function doubleNumbersInArray(array) {
    // Todo: use Array/map
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    const double = function(number) {
      return number * 2
    };

    return array.map(double);
  },

  checkForBadWords(input) {
    // Todo: use Array/forEach and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    let grosMot = ['merde', 'putain', 'Oh merde!'];

    const verifyBadWord = function (badWord) {
      if (badWord === input) {
        throw Error('No bad word pls')
      }
    };
    const verifyBadWord2 = (badWord) => {
      if (badWord === input) {
        throw Error('No bad word pls')
      }
    };

    // Solution 1
    grosMot.forEach(badWord => {
      if (badWord === input) {
        throw Error('No bad word pls')
      }
    });


    // Solution 2
    if (grosMot.includes(input)) {
      throw Error('No bad word pls')
    }

  },

  nameOfWeekDay(index) {
    const jours = ['Monday', 'Tuesday', 'Friday'];
    const result = jours[0];
    return result;
  },

  sortNumbers(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    
    // const months = ['March', 'Jan', 'Feb', 'Dec'];
    // months.sort();
    // console.log(months);

    
    // return array.sort((a,b) => b - a);

    return array.sort((a,b) => a - b);
  },

  createCounterFunction(input) {

    let count = input;

    const increments = () => {
      count = count + 1;
      return count;
    }

    return increments;
  },

  createHelloMessage(name) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    
    return `Hello ${name}. Are you well?`;
  },

  callTheCallback(callback) {
    // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function pas ;cc ENZO <3

    callback(1, 2);
  },

  combineArrays(array1, array2) {
    return [...array1, ...array2];
  },

  promiseMeMoney() {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve('send message');
      }, 2000);
    });
  },
};

module.exports = functions;
