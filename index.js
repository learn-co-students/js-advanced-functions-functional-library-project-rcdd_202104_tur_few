const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, callback) {
      if(array.length) array.forEach(element => callback(element));
      else {
        const objectValues = Object.values(array);
        objectValues.forEach(element => callback(element));
      } 
      return array;
    },

    map: function(array, callback) {
      let mapArr = [];
      if(array.length) mapArr = array.map(element => callback(element));
      else mapArr = Object.values(array).map(element => callback(element));
      return mapArr;
    },

    reduce: function(array, callback, acc) {
      let reduceArr = [];
      if(acc) reduceArr = array.reduce(callback, acc);
      else reduceArr = array.reduce(callback);
      return reduceArr;
    },

    find:  function(array, callback) {
      return array.find(callback);
    },

    filter: function(array, callback) {
      return array.filter(callback);
    },

    size: function(array) {
      if (array.length) return array.length;
      else return Object.keys(array).length;
    },

    first: function(array, num) {
      if (!num) return array[0];
      let firstArr = [];
      for(let i = 0; i < num; i++) firstArr.push(array[i]);
      return firstArr;
    },

    last: function(array, num) {
      if (!num) return array[array.length - 1];
      let lastArr = [];
      for(let i = 1; i <= num; i++) lastArr.unshift(array[array.length - i]);
      return lastArr;
    },

    compact:  function(array) {
      let collection = [];
      array.forEach(element => {
        if (element) collection.push(element);
      });
      return collection;
    },

    sortBy:  function(array, callback) {
      let sortedArr = [...array];
      sortedArr.sort((a, b) => callback(a) - callback(b));
      return sortedArr;
    },

    flatten:  function(array, shallow) {
      if (shallow === true) return array.flat(1);
      else return array.flat(Infinity);
    },

    // vvvvvv     The trouble maker :(      vvvvvv
    uniq: function(array, isSorted, callback) {
      if (callback) {
        let uniqArr = [];                                   // Has [1, 2, 3]
        let comparingArr = array.map(callback);             // Has [1, 2, 2, 0, 1, 0, 0]
        let toKeep = [];
        comparingArr.map((value, index) => {
          if (!toKeep.includes(value)) {
            toKeep.push(value);
            uniqArr.push(array[index]);
          }
        });
        return uniqArr;
      }
      else return Array.from(new Set(array));
    },
    // ^^^^^^     The most complicated one :(   ^^^^^^

    keys:  function(object) {
      return Object.keys(object);
    },

    values: function(object) {
      return Object.values(object);
    },

    functions: function(object) {
      let objectFunctions = [];
      for(let key in object) {
        if(typeof(object[key]) === 'function') objectFunctions.push(key);
      }
      objectFunctions.sort();
      return objectFunctions;
    },
  }
})();

fi.libraryMethod();