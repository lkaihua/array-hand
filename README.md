array-hand
-------

A hand for array manipulation, in a functional way.


```javascript
const ah = require("array-hand");
```

No need to memorize `Slice`/`Splice` differences any more:

Cropping into a sub-array:
```javascript
const squares = [1, 4, 9, 16, 25];

ah(squares)
  .startAt(2)   // start index.
  .endAt()      // end index.
  .crop()       // crop into a new array.
  .values()     // output: [9, 16, 25]
                // `squares` remain [1, 4, 9, 16, 25]
```

Erase part of the array:
```javascript
ah(squares)
  .startAt(2)   // start index
  .select(1)    // select number of element(s)
  .erase()      // erase matching element(s)
  .values()     // output: [1, 4, 16, 25]
```


Insert new element(s):
```javascript
ah(squares)
  .startAt(2)   // start index
  .insert([42]) // insert a new array to insert new element(s)
  .values()     // output: [1, 4, 9, 42, 16, 25]
```

Insert before an element
```javascript
ah(squares)
  .startAt(0)   // start index, set to the head of array
  .insertBefore([42])  
                // insert a new element before start index
  .values()     // output: [42, 1, 4, 9, 16, 25]
```


Replace part of the array:
```javascript
ah(squares)
  .startAt(2)   // start index
  .select(2)    // select number of element(s)
  .replaceEach(42)  // replace each element with a new value
  .values()     // output: [1, 4, 42, 42, 25]             
```

Return detailed result:
```javascript
ah(squares)
  .startAt(2)   // start index
  .select(2)    // select number of element(s)
  .replace([42, 42])  // replace matching sub-array with a new one
  .details()    // output: an object with details

/**
{
  replaced: [9, 16],
  values: [1, 4, 42, 42, 25]
}
*/
```



should return error:
```javascript
ah(squares)
  .startAt(0)   // start index, set to the head of array
  .select(2) 
  .insert([42]) // insert/erase/replace will change its structure. these two methods should clear selection. SHOULD WARN OF NO SELECTION
  .erase()
  .values()     // output: [42, 1, 4, 9, 16, 25]
                
```

