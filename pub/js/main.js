(function(){
var app = angular.module('store', [ ]);
app.controller('StoreController', function(){
	this.products = gems;
});
app.controller("PanelController", function(){
	this.tab = 1;
	this.selectTab = function (setTab) {
		this.tab = setTab;
	}
	this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	};
})
app.controller("ReviewController", function(){
	this.review = {};
	this.addReview = function(product) {
		product.reviews.push(this.review);
		this.review = { };
	};
})
var gems = [
{
	name: 'Dodecahedron',
	price: 2,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	reviews: [
	{
		stars: 5,
		body: 'I love this product',
		author: 'joethomas.com'
	},
	{
		stars: 1,
		body: 'this product sucks!',
		author: 'tim@hater.com'
	}
	]
},
{
	name: 'Pentagonal Gem',
	price: 5.95,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	reviews: [
	{
		stars: 5,
		body: 'I love this product',
		author: 'joethomas.com'
	},
	{
		stars: 1,
		body: 'this product sucks!',
		author: 'tim@hater.com'
	}
	]}
]
})();