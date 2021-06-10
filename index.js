const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection = {"ali": 1, "veli": 2}, callBack = (a) => console.log(a)) {
      
      if (Array.isArray(collection)) {
        let i = 0;
        while (i < collection.length) {
          callBack(collection[i], i, collection);
          i++;
        }
        return collection;
      }
      else {
        let i = 0;
        while (i < Object.keys(collection).length) {
          for (let element in collection) {
            callBack(collection[element], Object.keys(collection)[i], collection);
          }
          i++;
        };
 
        return collection;
      }      
    
    },

    map: function(collection = {"one": 1, "two": 2, "three": 3}, callBack = (e) => e * 2) {
      let newArr = [];

      if ((Array.isArray(collection))) {
        let i = 0;
        while(i < collection.length) {
          newArr.push(callBack(collection[i], i, collection));
          i++;
        }
        console.log(newArr)
        return newArr;
      }
      else {
        let i = 0;
        while (i < Object.keys(collection).length) {
          for (let element in collection) {
            console.log(element)
            newArr.push(callBack(collection[Object.keys(collection)[i]], Object.keys(collection)[i], collection));
            i++;
          }
        }
        console.log(newArr)
        return newArr;
      }

    },

    reduce: function(collection = [1,2,3], callBack = (accumulator, currentValue, collection = [1,2,3]) => accumulator += currentValue, initialValue) {
      if (initialValue === undefined) {

        initialValue = collection[0];
        let i = 1;
        let acc = 0;
        while (i < collection.length) {

          acc += callBack(0, collection[i], collection);
          i++;
        }
        return initialValue + acc;
      }
      else {

        let i = 0;
        let acc = 0;
        while (i < collection.length) {
          acc += callBack(0, collection[i], collection);
          i++;
        }
        return acc + initialValue;
      }

    },

    functions: function() {

    },

    find: function(collection = [1,2,3,4], predicate = e => e === 3) {

      let i = 0;
      while (i < collection.length) {
        let result = predicate(collection[i])

        if (result !== true) {
          i++;
        }
        else {
          return collection[i];
        }

      }


    },

    filter: function(collection = [1,2,3,4], predicate = e => e % 2 === 0) {
      
      let newArr = [];
      let i = 0;
      while(i < collection.length) {
        let result = predicate(collection[i]);
        if (result === true) {
          newArr.push(collection[i]);
        }
        i++;
      }
      return newArr;

    },

    size: function(collection = [1,2,3,4,5]) {
      if (Array.isArray(collection) === true) {
        return collection.length;
      }
      else if (Array.isArray(collection) === false) {
        return Object.keys(collection).length;
      }
    },

    first: function(array, n) { //HELLLLLLLLLLLLP

      if (typeof n === "undefined") {
        return array[0];
      }

      else if (typeof n === "number") {
        return array.slice(0, n);
      }

    },

    last: function(array, n) {
     
      if (typeof n === "undefined") {
        return array[array.length - 1];
      }

      else if (typeof n === "number") {
        return array.slice(array.length - n);
      }
    },

    compact: function(array) {

      return array.filter(function(element) {
        return element;
      })
    },

    sortBy: function(data, callBack) {

      let copyData = data.slice();
      copyData.sort((a,b) => callBack(a) - callBack(b));
      return copyData;
    },

    uniq: function(array, boolean, callBack) {

      // let result = [...new Set(array)]
      // return result;
      if(callBack === undefined) {

        let result = array.filter((currentItem, index) => {
          return array.indexOf(currentItem) === index;
        });

        return result

      }

      else if (callBack !== undefined) {

        let arr = []

        for(let i = 0; i < array.length; i++) {

          if (i === 0) {
            arr.push(callBack(array[i]));
          }
          else if (i !== 0 && arr.includes(callBack(array[i])) === false) {

            arr.push(callBack(array[i]));

          }

        }
        console.log(arr)
        return arr;

        
        // let callBackResult = array.map(callBack);

        // let result = callBackResult.filter((currentItem, index) => {
        //   return callBackResult.indexOf(currentItem) === index;
        // });

        // return result
      }



      // array.forEach(function(element, index) {

      //   if (index !== array.indexOf(element)) {
      //     array.splice(index, 1);
      //   }

      // });
      // return array
    },

    keys: function(obj) {
      return Object.keys(obj);  
    }, 

    values: function(obj) {
      let keys = Object.keys(obj);
      return keys.map(function(key) {
        return obj[key];
      }); 
    },

    functions: function(obj) {
      let keys = Object.keys(obj);

      let result = keys.reduce(function(accumulator, currentKey) {

        if (typeof obj[currentKey] === "function") {
          accumulator += currentKey;
        }
        return accumulator;

      }, [])

      return result
    },

    flatten: function(array, boolean = false) {

      if (boolean === false) {
        return array.flat(999999999999);
      }
      else if (boolean === true) {
        return array.flat();
      }

    }

  }
})()


// const testObject = {
//   a: "",
//   z: () => null,
//   p: "",
//   c: () => null,
//   k: () => null,
// }

// fi.functions(testObject);


fi.uniq([1, 2, 2, 3, 4, 6, 9], false, (val => val % 3));