### [Primitive: Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

* _symbol_: `null`
* _pronunciation_: "null", "null value", "is null"
* _examples_:
```javascript
null // how exciting
```

### [Primitive: String](https://developer.mozilla.org/en-US/docs/Glossary/String)

* _symbol_: any character such as letter, numerals or punctuation 
* _pronunciation_: "a string" "a string value"
* _examples_:
````
'hello world' // creates string printing hello world
````

### [Primative: Number](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

* _symbol_: a numeric date type
* _pronunciation_: "number" "a number"
* _examples_:
````
2 * 2
4		// multiplies two numbers
````

### [Primitive: Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)

* _symbol_: logical data type that can have one of two possible values: true or false
* _pronunciation_: "a boolean"
* _examples_:
````
x = new Boolean(false);
if (x) {
	// this code is executed
}
````

### [Literal: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

* _symbol_: Pairs of strings and values where names is separated from the value by a colon.
* _pronunciation_: "object" "an object"
* _examples_: 
````
var o = new Object();
````

### [Literal: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

* _symbol_: `[ ]` seperate by ` , `
* _pronunciation_: "array" "an array"
* _examples_:
````
var years = [2001, 2002, 2008, 2010, 2012]
````

### [Global Values: Infinity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)

* _symbol_: `infinity` 
* _pronunciation_: numeric value representing "infinity"
* _examples_:
````
5 * Infinity
Infinity  //behaves mathematically like infinity
````

### [Global Values: NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

* _symbol_: `NaN` 
* _pronunciation_: 'NaN' 'Not-A-Number'
* _examples_:
````
6 === NaN;  //false
````

### [Global Attributes: undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

* _symbol_: `undefined`
* _pronunciation_: represent the vlaue 'undefined'
* _examples_:
````
var x;
 if (x === undefined) {
 	// these statements execute
 }
 else {
 	// these statements do not execute
 }
````

### [Comparison Operator: Equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)

* _symbol_: `==`
* _pronunciation_: "equal" "is equal"
* _examples_:
````
3 == 3  //true
````

### [Comparison Operator: Not Equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)

* _symbol_: `!=`
* _pronunciation_: "not equal" "does not equal" 
* _examples_:
````
var1 = 3
var1 != 4 //true
````

### [Comparison Operator: Strict Equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)

* _symbol_: `===` 
* _pronunciation_: "strict equal" return true if the operands are equal and of the same type
* _examples_:
````
var1 == 3
3 === var1  //true
````

### [Comparison Operator: Strict Not Equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)

* _symbol_: `!==` 
* _pronunciation_: "strict not equal" returns true if the operands are not equal and/or not of same type
* _examples_:
````
var1 == 3
var1 !== "3" // true
````

### [Comparison Operator: Greater Than](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)

* _symbol_: `>`
* _pronunciation_: "greater than" "is greater than"
* _examples_:
````
var1 == 3
4 > var1 // true 
````

### [Comparison Operator: Greater Than or Equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)

* _symbol_: `>=` 
* _pronunciation_: "greater than or equal to" "is greater than or equal to"
* _examples_:
````
var1 == 3
4 >= var1 // true
````

### [Comparison Operator: Less Than](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)

* _symbol_: `<` 
* _pronunciation_: "less than" "is less than"
* _examples_:
````
var1 == 3
1 < var1 // true
````

### [Comparison Operator: Less Than or Equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)

* _symbol_: `<=` 
* _pronunciation_: "less than or equal to" "is less than or equal to"
* _examples_:
````
var1 == 3
2 <= var1 // true
````

### [Control Flow: Block Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _symbol_: `{ }` 
* _pronunciation_: "block statement" 
* _examples_:
````
{
	statement_1;
	statement_2;
	.
	.
	.
	statment_n;
}
````

### [Conditional Statements: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _symbol_: `if() { statement;} else{ statement;}`
* _pronunciation_: "if else" If execute a statement if a logical condition is true Else execute a statement if the condition is false
* _examples_:
````
if(condition) {
	statement_1;
} else {
	statement_2;
}

````

### [Conditional Statements: if..else..else if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _symbol_: `if(){statement;} else if(){statement;} else{statement;};`
* _pronunciation_: "if else else if" else if to have multiple conditions tested
* _examples_:
````
if (condition_1) {
	statement_1;
} else if (condition_2){
	statement_2;
} else if (condition_n) {
	statement_n;
} else {
	statement_last;
}
````

### [Conditional Statements: switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _symbol_: `switch(expression){case: statement break case: statement break deafault: statement break}`
* _pronunciation_: "swtich statement" allows a program to evaluate an expression and attempt top match the expressions value to a case label
* _examples_:
````
swtich (fruittype) {
	case "Oranges":
		document.write("Oranges are $.59 a pound.<br>");
		break;
	case "Apples":
		document.write("Apples are $.32 a pound.<br>");
		break;
	case "Bananas":
		document.write("Bananas are $.48 a pound.<br>");
		break;
	case "Cherries":
		document.write("Cherries are $3.00 a pound.<br>");
		break;
	case "Mangoes":
		document.write("Mangoes are $.56 a pound.<br>");
		break;
	case "Papayas":
		document.write("Mangoes and papayas are $2.79 a pound.<br>");
		break;
	deafault:
		document.write("Sorry, we are out of " + fruittype +".<br>");
};
````

### [Loop Statement: for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _symbol_: `for ([initialExpression]; [condition]; [incrementExpression]) statement`
* _pronunciation_: "for loop" repeats until a specified condition evaluates to false
* _examples_:
````
<script>
function howMany(selectObject) {
   var numberSelected = 0;
   for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected)
         numberSelected++;
   }
   return numberSelected;
}
</script>
<form name="selectForm">
   <p>
      <strong>Choose some music types, then click the button below:</strong>
      <br/>
      <select name="musicTypes" multiple="multiple">
         <option selected="selected">R&B</option>
         <option>Jazz</option>
         <option>Blues</option>
         <option>New Age</option>
         <option>Classical</option>
         <option>Opera</option>
      </select>
   </p>
   <p>
      <input type="button" value="How many are selected?"
         onclick="alert ('Number of options selected: ' + howMany(document.selectForm.musicTypes))"/>
   </p>
</form>
````

### [Loop Statement: do..while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _symbol_: `do statement while (condition);`
* _pronunciation_: "do while statement" repeats until a specified condition evaluates to false
* _examples_: 
````
do {
	i += 1;
	document.write(i);
} while (i < 5);
````

### [Loop Statement: while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _symbol_: `while (condition) statement`
* _pronunciation_: "while statement" executes its statements as long as a specified condition evaluates to true
* _examples_: 
````
n = 0
x = 0
 while (n < 3) {
 	n++;
 	x += n;
 }
````

### [Loop Statement: label](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _symbol_: `label: statement`
* _pronunciation_: "label" provides a statement with and identifier and lets you refer to it elsewhere in your program.
* _examples_:
````
markLoop:
 while (theMark == true) {
 doSomething();
 }
````

### [Loop Statement: break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _symbol_: `break; break label;`
* _pronunciation_: "break statement" use to terminate a loop, switch, or in conjunction with a label statement.
* _examples_:
````
for (i = 0; i < a.length; i++) {
	if (a[i] == the Value)
		break;
}
````

### [Loop Statement: continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _symbol_: `continue; continue label;`
* _pronunciation_: "continue statement" can be used to restart a while, do-while, for, or label statement
* _examples_: 
````
i = 0
n = 0
 while (i < 5) {
 	i++;
 	if (i == 3)
 		continue;
 	n += i;
 }
````

### [Statement: return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

* _symbol_: `return`
* _pronunciation_: "return" statement ends function executtion and specifies a value to be returned to the function caller.
* _examples_:
````
return;
return true;
return false;
return x;
return x + y / 3;
````

### Literal: [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

* *symbol:* `[ ]`
* *pronunciation:* "array", "new array" high-level, list-like objects
* *examples:*
````
[element0, element1,..., elementN]
new Array(element0, element1[, ...[. elementN]])
new Array(arrayLength)
````

#### `Array.length`

* *value:* specifies number of elements in an array
* *examples:*
````
var myArray = ['hello world', 16, 'Taylor Foster', 80]
console.log(myArray.length); // will log 4 into console
````

#### [`Array.prototype.pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

* *result:* the `pop()` method removes the last element from an array and returns that element 
* *parameters:* intentionally generic and can be called or applied to objects resembling arrays
* *returns:* returns value of the last element in array to the caller. If called on emtpy array, it returns undefined value.

#### [`Array.prototype.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

* *result:* the `push()` method adds one or more elements to the end of an array and returns the new length of the array 
* *parameters:* intentionally generic. Can be used with `call()` or `apply()` on objects resembling arrays. 
* *returns:* returns the new length property of the object upon which the method was called.

#### [`Array.prototype.reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

* *result:* `reverse()` method reverses an array in place. The first element becomes the last and the last becomes the first.
* *parameters:* none
* *returns:* returns a refrence to the array

#### [`Array.prototype.shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

* *result:* `shift()` method removes the frist element from an array and returns that element. changes length of array
* *parameters:* intentionally generic. can be called or applied to objects resembling arrays.
* *returns:* returns the removed value, if length is 0, undefined is returned 

#### [`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

* *result:* `sort()` method sort the elements of an array in place and returns the array. 
* *parameters:* `compareFunction` this is optional. Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.
* *returns:* if `compareFunction` is not supplied, elements are sorted by converting them to strings and comparing strings in UNICODE point order.

#### [`Array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

* *result:* `splice()` method changes the content of an array by removing existing elements and/or adding new elements.
* *parameters:* `start` Index at which to start changing the array. `deleteCount` an interger indicating the number of old array elements to remove. `itemN` the element to add to the array
* *returns:* returns an array containing the deleted elements.

#### [`Array.prototype.unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

* *result:* `unshift()` methods adds one or more elements to the beginning of an array and returns the new length of the array. 
* *parameters:* `elementN` the elements to add to the front of the array.
* *returns:* returns the new length property of the object upon which the method was called. 


### Iterator Methods 

#### [`Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

* *result:* `unshift()` method excutes a provided function once per array element. 
* *parameters:* `arr.forEach(callback[, thisArg])` 
	* `callback` Function that produces an element of the new Array, taking three arguments: `current value` the current element being processed in the array. `index` the index of the current element being processed in the array. `array` the array forEach() was called upon.
	* `thisArg` optional. Value to use as this when executing callback.
* *returns:* always retuns the value undefined
* *example:* The following code logs a line for each element in an array
````
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}
// Note ellision, there is no member at 2 so it isn't visited
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
````

#### [`Array.prototype.every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

* *result:* `every()` tests whether all elements in the array pass the test implemented by the provded function. 
* *parameters:* `arr.every(callback[, thisArg])` 
	* `callback` Function to test for each element, taking three arguments: `current value` the current element being processed in the array. `index` the index of the current element being processed in the array. `array` the array every() was called upon.
	* `thisArg` optional. Value to use as this when executing callback.
* *returns:* a Boolean
* *example:* tests whether all elements in the array are bigger than 10
````
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
````

#### [`Array.prototype.some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

* *result:* `unshift()` method tests whether some element in the array passes the test implemented by the provided funtions 
* *parameters:* `arr.some(callback[, thisArg])` 
	* `callback` Function to test for each element, taking three arguments: `current value` the current element being processed in the array. `index` the index of the current element being processed in the array. `array` the array some() was called upon.
	* `thisArg` optional. Value to use as this when executing callback.
* *returns:* if element is found, immediatly returns true. Otherwise, returns false
* *example:* tests whether any element in the array is bigger than 10
````
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
````

#### [`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

* *result:* `filter()` method creates a new array with all the elements that pass the test implemented by the provided function. 
* *parameters:* `arr.filter(callback[, thisArg])` 
	* `callback` function to test each element of the array. Invoked with arguments(element, index, array). Return true to keep the element, false otherwise.
	* `thisArg` Optional. Value to use as this when executon callback
* *returns:* 
* *example:* uses filter() to create a filtered array that has all elements with values less than 10 removed
````
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
````

#### [`Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

* *result:* `reduce()` method applies a function against an accumulator and each valueof the array(from left-to-right) has to reduce it to a single value. 
* *parameters:* `arr.reduce(callback[, initialValue])` 
	* `callback` Function to execute on each value in the array, taking four arguments: `previousValue` the value previously returned in the last invocation of the callback or `initialValue` if supplied. `currentValue` the current element being processed in the array. `index` the index of the current element being processed in the array. `array` the array reduce() was called
	* `initialValue` Optional. Object to use as the first argument to the first call of the callback.
* *returns:*
* *example:* flatten an array of arrays
````
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
});
// flattened is [0, 1, 2, 3, 4, 5]
````

#### [`Array.prototype.reduceRight()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)

* *result:* `reduceRight()` applies a function agaisnt an accumulator and each value of the array (from right-to-left) has to reduce it to a single value.
* *parameters:* `arr.reduceRight(callback[, initialValue])` 
	* `callback` Function to execute in the array, taking four arguments: `previousValue` the value previously returned in the last invocation of the callback or `initialValue` if supplied. `currentValue` the current element being processed in the array. `index` the index of the current element being processed in the array. `array` the array reduce() was called
	* `initialValue` optional. Object to use as the first argument to the firdt call of the callback.
* *returns:* 
* *example:* flatten an array of arrays
````
var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]
````