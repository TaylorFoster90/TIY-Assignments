##Lodash Methods

####[`_.reject`](https://lodash.com/docs#reject)
* *parameters:* `_.reject(collection, [predicate=_.identity], [thisArg])`
	* the opposite of _.filter; this method returns the elements of collection and that predicate does not return truthy for.
	* `collection`(Array|Object|string): the collection to iterate over.
	* `[predicate=_.identify]`(Function|Object|string): The function invoked per iteration. If a property name or object is provided it is used to create a ".property" or ".matches" style callback respectively.
	* `[thisArg]`(*): the this binding of predicate.
* *returns:* (Array): returns the new filtered array.
* *example:*
````
var odds = _.reject([1, 2, 3, 4], function(n) { return n % 2 == 0; });
// → [1, 3]
````

####[`_.where`](https://lodash.com/docs#where)
* *parameters:* `_.where(collection, source)`
	* perfrom a deep comparison bewteen each element in collection and the source object, returning an array of all elements that have equivalent property values.
	* `collection`(Array|Object|string): the collection to search.
	* `source`(Object): The object of property values to match. 
* *returns:* (Array): returns the new filtered array.
* *example:*
````
var users = [
  { 'user': 'barney', 'age': 36, 'status': 'busy', 'pets': ['hoppy'] },
  { 'user': 'fred',   'age': 40, 'status': 'busy', 'pets': ['baby puss', 'dino'] }
];
_.pluck(_.where(users, { 'age': 36 }), 'user');
// → ['barney']
_.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
// → ['fred']
_.pluck(_.where(users, { 'status': 'busy' }), 'user');
// → ['barney', 'fred']
````

####[`_.filter`](https://lodash.com/docs#filter)
* *parameters:* `_.filter(collection, [predicate=_.identity], [thisArg])`
	* Iterates over elements of collection, returning an array of all the elements predicate returns truthy for. the predicate is bound to thisArg and invoked with three arguments;(value,index|key,collection).
	* `collection`(Array|Object|string): the collection to iterate over.
	* `[predicate=_.identify]`(Function|Object|string): The function invoked per iteration. If a property name or object is provided it is used to create a ".property" or ".matches" style callback respectively.
	* `[thisArg]`(*): the this binding of predicate.
* *returns:* (Array): returns the new filtered array.
* *example:*
````
var evens = _.filter([1, 2, 3, 4], function(n) { return n % 2 == 0; });
// → [2, 4]
````

####[`_.forEach`](https://lodash.com/docs#forEach)
* *parameters:* `_.forEach(collection, [iteratee=_.identity], [thisArg])`
	* Iterates over elements of collection, invoking iteratee for each element. The iteratee is bound thisArg and invoked with three agruments;(value, index|key, collection). Iterator functions may exit iteratin early by explicitly returning false. 
	* `collection`(Array|Object|string): the collection to iterate over.
	* `[predicate=_.identify]`(Function): The function invoked per iteration.
	* `[thisArg]`(*): the this binding of iteratee.
* *returns:* (Array|Object|string): Returns collection. 
* *example:*
````
_([1, 2, 3]).forEach(function(n) { console.log(n); }).value();
// → logs each value from left to right and returns the array
_.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(n, key) { console.log(n, key); });
// → logs each value-key pair and returns the object (iteration order is not guaranteed)
````

####[`_.slice`](https://lodash.com/docs#slice)
* *parameters:* `_.slice(array, [start=0])`
	* Creates a slice of array from start up to, but not including, end. 
	* `array`(Array): The array to slice.
	* `[start=0]`(number): The start position.
	* `[end=array.length]`(number): the end position.
* *returns:* (Array): Returns the slice of the array

####[`_.indexBy`](https://lodash.com/docs#indexBy)
* *parameters:* `_.indexBy(collection, [iteratee=_.identity], [thisArg])`
	* creates an object composed of keys generated from the results of running each element collection throught iteratee. This coressponding value of each key is the last elements responsible for generatuing the key. The iteratee function is bound to thisArg and invoked with three arguments;(value, index|key, collection).
	* `collection`(Array|Object|string): the collection to iterate over.
	* `[predicate=_.identify]`(Function|Object|string): The function invoked per iteration. If a propery name or object is provided it is used to create a ".property" or ".matches" style callback respectively.
	* `[thisArg]`(*): the this binding of iteratee.
* *returns:* (Object): Returns the composed aggregate object.
* *example:*
````
var keyData = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];
_.indexBy(keyData, 'dir');
// → { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
_.indexBy(keyData, function(object) { return String.fromCharCode(object.code); });
// → { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
_.indexBy(keyData, function(object) { return this.fromCharCode(object.code); }, String);
// → { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
````

####[`_.some`](https://lodash.com/docs#some)
* *parameters:* `_.some(collection, [predicate=_.identity], [thisArg])`
	* creates if predicate returns truthy for any element of collection. The function returns as soon as it finds a passing value and does not iterate over the entire collection. The predicate is bound to thisArg and invoked with three arguments; (value, index|key, collection),
	* `collection`(Array|Object|string): the collection to iterate over.
	* `[predicate=_.identify]`(Function|Object|string): The function invoked per iteration. If a propery name or object is provided it is used to create a ".property" or ".matches" style callback respectively.
	* `[thisArg]`(*): the this binding of iteratee.
* *returns:* (boolean): Returns true if any element passes the predicate check, else false. 
* *example:*
````
_.some([null, 0, 'yes', false], Boolean);
// → true
var users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': true }
];
// using the "_.property" callback shorthand
_.some(users, 'active');
// → true
// using the "_.matches" callback shorthand
_.some(users, { 'age': 1 });
// → false
````