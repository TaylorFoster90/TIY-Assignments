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
* *parameters:* `_.forEach(collection, [iteratee
=_.identity], [thisArg])`
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

