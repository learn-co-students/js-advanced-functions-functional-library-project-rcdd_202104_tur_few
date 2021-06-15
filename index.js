const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function() {
      fi.each([1, 2, 3], alert);
    },

    map: function() {
      fi.map([1, 2, 3], function(num){ return num * 3; });

    },

    reduce: function() {
      let sum = fi.reduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 0);
    },

    functions: function() {
      let even = fi.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    },


  }
})()

fi.libraryMethod()
