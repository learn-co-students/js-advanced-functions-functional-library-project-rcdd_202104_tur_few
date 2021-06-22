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

    map: function(collection,callback) {
      let arrayCollection=(Array.isArray(collection))?collection:Object.values(collection);
      let newCollection=[];
      for(const element of arrayCollection){
      newCollection.push(callback(element))}

      return newCollection;
    },

    reduce: function(array, callback, acc) {
      let reduceOfArray = [];
      if(acc) reduceOfArray = array.reduce(callback, acc);
      else reduceOfArray = array.reduce(callback);
      return reduceOfArray;
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
      let arrOfExample = [];
      for(let i = 0; i < num; i++) arrOfExample.push(array[i]);
      return arrOfExample;
    },

    last: function(array,n=-1){
      return (n===-1)?array.slice(n)[0]:array.slice(-n);
  },

    compact: function(array) {
      let collection = [];
      array.forEach(element => {
        if (element) collection.push(element);
      });
      return collection;
    },

    sortBy: function(array, callback) {
      let sortedArr = [...array];
      sortedArr.sort((a, b) => callback(a) - callback(b));
      return sortedArr;
    },

    flatten: function(array, shallow) {
      if (shallow === true) return array.flat(1);
      else return array.flat(Infinity);
    },

    
    uniq: function(array, isSorted, callback = (a) => a) {
      const uniqueArray = [];

      for (const element of array) {
        let counter = 0;
        for (const uniqElement of uniqueArray) {
          if (callback(uniqElement) === callback(element)) {
            counter++;
          }
        }
        if (counter < 1) {
          uniqueArray.push(element);
        }
      }

      return uniqueArray;
    },
    

    keys: function(object) {
      return Object.keys(object);
    },

    values: function(object) {
      return Object.values(object);
    },
    functions: function(object) {
      let objectOfFunctions = [];
      for(let key in object) {
        if(typeof(object[key]) === 'function') objectOfFunctions.push(key);
      }
      objectOfFunctions.sort();
      return objectOfFunctions;
    },

    


  }
})()

fi.libraryMethod()
