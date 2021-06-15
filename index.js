const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)

      for(let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
      }
      
      return collection;
    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)

      let arr = []
      for(let i = 0; i < newCollection.length; i++) {
        arr.push(callback(newCollection[i]))
      }
      
      return arr;
    },

    reduce: function(collection, callback, acc) {
      if(!acc){
        acc = collection[0];
        collection = collection.slice(1)
      }

      for(let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc;
    },

    find: function(collection, predicate) {
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)

      for(let i = 0; i < newCollection.length; i++) {
        if(predicate(newCollection[i])){
          return newCollection[i]
        }
      }
      return undefined
    },

    filter: function (collection, predicate) {
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)
      let arr = []

      for(let i = 0; i < newCollection.length; i++) {
        if(predicate(newCollection[i])){
          arr.push(newCollection[i])
        }
      }
      return arr;
    },

    size: function (collection) {
      return (collection instanceof Array) ? length.collection : Object.values(collection).length
    },

    first: function (collection, element) {
      if(element) return collection.slice(0, element)
      return collection[0]
    },

    last: function (collection, element) {
      if(element) return collection.slice(-element)
      return collection[collection.length-1]
    },

    compact: function (collection) {
      
      let arr = []
      // why doesnt this  work with a basic for loop ?
      collection.forEach(element => {
        if(element) arr.push(element)
      });
      return arr;
    },

    sortBy: function (collection, callback) {
      let newCollection = [...collection]

      newCollection.sort(function (a,b) {
        return callback(a) - callback(b)
      })

      return newCollection
    },

    flatten: function (collection, shallow) {
      if(shallow === true) return collection.flat(1)
      return collection.flat(Infinity)
    },

    
    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },
    
    //Couldnt do this. Got to check unifiqation algorithms
    uniq: function (collection, sorted = false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
     
      // if(isSorted) {
      //   const sorted = [collection[0]]
      //   for(let i = 1; i < collection.length; i++) {
      //     if(sorted[i-1] !== sorted[i]) {
      //       sorted.push(collection[i])
      //     }
      //     return sorted
      //   }
      // }
      // if(callback) {
      //   let returnArr= []
      // }
    },

    keys: function(object) {
      const objectKeys = []
      // for in is for iterating over objects
      for(let key in object){
        objectKeys.push(key)
      }
      return objectKeys
    },

    values: function(object) {
      const objectValues = []
      for(let key in object) {
        objectValues.push(object[key])
      }
      return objectValues
      
    },

    functions: function(object) {
      const functions = []

      for(let key in object) {
        if(typeof object[key] === 'function'){
          functions.push(key)
        }
      }
      return functions.sort()
    },



    


  }
})()

fi.libraryMethod()
