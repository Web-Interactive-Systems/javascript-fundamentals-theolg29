// TODO: Fix the errors in the functions below!

const functions = {
  // Computes the total order of a command
  // Rule: if total order is > 1000 the shipping is free
  orderTotal(order) {
    let sommeTotal = 0;
    let shippingPrice;

    order.items.forEach((e) => {
      if (e.name !== 'Tax') {
        const price = e.price * e.quantity;
        sommeTotal += price;
      } else {
        shippingPrice = e.price;
      }
    });

    if (sommeTotal < 1000) {
      sommeTotal += shippingPrice;
    }

    // const totalNormalItems = order.items...;
    // const shippingItem = order.items...;
    // const shipping = ...;
    return sommeTotal;
  },

  addPositive(array) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    let sum = 0;

    function cb(e) {
      const nb = parseInt(e);
      if (nb > 0) {
        sum = sum + nb;
      }
    }

    array.forEach(cb);

    return sum;
  },

  // Takes a string, find the first consecutively repeating character in it and return the first index of the repeated character. If there are no repeating characters, return -1. This function should ignore any spaces and should be case insensitive - treat 'a' as eqivalent to 'A'
  repeatingCharacter(string) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

    let index = -1;

    string = string.toUpperCase();

    for (let i = 0; i < string.length - 1; i++) {
      if (string.charAt(i) === ' ') {
        continue;
      }
      if (string.charAt(i) === string.charAt(i + 1)) {
        index = i + 1;
        break;
      }
    }

    return index;
  },

  // Takes an array of 1's and 0's, find the maximum number of consecutive 1's
  // in this array. If there is any value other than 1 or 0 in the array,
  // this is an error, return -1. The 1's and 0's may be either string or
  // integer values, both are acceptable and should be considered equivalent
  maxOneNumber(array) {
    let maxCount = -1;
    let currentCount = 0;
    //
    // Todo
    const cb = (e) => {
      e = parseInt(e);
      if (e !== 1 && e !== 0) {
        maxCount = -1;
        return false;
      } else if (e === 1) {
        currentCount++;
        maxCount = Math.max(currentCount, maxCount);
      } else {
        currentCount = 0;
      }
    };

    array.forEach(cb);

    return maxCount;
  },
};

module.exports = functions;
