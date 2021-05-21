const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, alert) {
      const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
      for (const element of newCollection) {
        alert(element);
      }
      return collection;
    },

    map: function (collection, callback) {
      const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
      const returnCollection = [];
      for (const element of newCollection) {
        returnCollection.push(callback(element));
      }
      return returnCollection;
    },

    reduce: function (collection, callback, acc) {
      let total = !!acc ? acc : collection[0];
      let i = !!acc ? 0 : 1;

      for (; i < collection.length; i++) {
        total = callback(total, collection[i], collection);
      }
      return total;
    },

    find: function (collection, callback) {
      for (const element of collection) {
        if (callback(element)) {
          return element;
        }
      }
    },
    filter: function (collection, callback) {
      const filterd = [];
      for (const element of collection) {
        if (callback(element)) {
          filterd.push(element);
        }
      }
      return filterd;
    },
    size: function (collection) {
      const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
      return newCollection.length;
    },
    first: function (array, n = 1) {
      const newArr = array.slice(0, n);
      return newArr.length == 1 ? newArr[0] : newArr;
    },

    last: function (array, n = 1) {
      const newArr = array.slice(-n, array.length);
      return newArr.length == 1 ? newArr[0] : newArr;
    },
    compact: function (array) {
      const newArr = [];
      for (const element of array) {
        if (element) {
          newArr.push(element);
        }
      }
      return newArr;
    },
    sortBy: function (array, callback) {
      const newArr = [...array];
      return newArr.sort(function (a, b) {
        return callback(a) - callback(b);
      });
    },
    keys: function (obj) {
      const keys = [];
      for (const key in obj) {
        keys.push(key);
      }
      return keys;
    },

    values: function (obj) {
      const values = [];
      for (const key in obj) {
        values.push(obj[key]);
      }
      return values;
    },

    flatten: function (array, shallow, newArr = []) {
      if (shallow) {
        return newArr.concat.apply([], array);
      } else {
        for (const element of array) {
          if (Array.isArray(element)) {
            fi.flatten(element, false, newArr);
          } else {
            newArr.push(element);
          }
        }
        return newArr;
      }
    },

    uniq: function (array, isSorted, callback = a => a) {
      if (isSorted) {
        const newArr = [array[0]];
        for (let i = 1; i < array.length; i++) {
          if (callback(array[i - 1]) !== callback(array[i])) {
            newArr.push(array[i]);
          }
        }
        return newArr;
      } else {
        const uniqueArray = [];
        for (const element of array) {
          let found = false;
          for (const uniqElement of uniqueArray) {
            if (callback(uniqElement) === callback(element)) {
              found = true;
            }
          }
          if (!found) {
            uniqueArray.push(element);
          }
        }

        return uniqueArray;
      }
    },

    functions: function (object) {
      let methods = [];

      for (const key in object) {
        if (typeof object[key] === "function") {
          methods.push(key);
        }
      }

      return methods.sort();
    },
  };
})();

fi.libraryMethod();
/*fi.each([1, 2, 3], alert);
fi.map([1, 2, 3], function (num) {
  return num * 3;
});*/
