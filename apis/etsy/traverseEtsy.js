var data = require('./trending.json');
var dataTax = require('./taxonomy.json');
var _ = require('lodash');
var trending = data.results;
var taxon = dataTax.results; 

function keyChecker(array,key){
	return _.map(array,key)
};

console.log(keyChecker(taxon, "name"));


/* https://openapi.etsy.com/v2/taxonomy/seller/get?api_key=q4ubii6kukovuc0hl2e8myxx */