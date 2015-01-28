##Lodash Methods

####[`_.reject`](https://lodash.com/docs#reject)
* *parameters:* `_.reject(collection, [predicate=_.identity], [thisArg])`
	* the opposite of _.filter; this method returns the elements of collection and that predicate does not return truthy for.
	* `collection`(Array|Object|string): the collection to iterate over.
	* `[predicate=_.identify]`(Function|Object|string): The function invoked per iteration. If a property name or object is provided it is used to create a ".property" or ".matches" style callback respectively.
	* `[thisArg]`(*): the this binding of predicate.
* *returns:* (array): returns the new filtered array.
* *example:*
````
var odds = _.reject([1, 2, 3, 4], function(n) { return n % 2 == 0; });
// → [1, 3]
````

