var util = (function() {

	/** iterate each element over the array, if the first position
		of an element in the array is equal to the current position
		then we filter out the duplicate element.
	*/
	var unique = function(arr) {
		let uni_arr = arr.filter (function(elem, index, self){
			return index == self.indexOf(elem);
		});
		return uni_arr;
	};

	var extend = function(dict, element) {
		for (key in element) {
			dict[key] = element[key];
		}
		return dict;
	};

	return {
		unique: unique,
		extend: extend
	}
})();

var uniqueList = util.unique(['a', 'b', 'c', 'b', 'd', 'a', 'd',
'e']);
console.log(uniqueList);

var homer = util.extend({name: 'Homer'}, {occupation: 'Nuclear Safety Inspector'});
console.log(homer);

homer = util.extend(homer, {kids: [{name: 'Bart'}, {name:'Lisa'}, {name: 'Maggie'}]});
console.log(homer);