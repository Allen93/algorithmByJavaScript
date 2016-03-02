'use strict';

var insertion_sort = require('../sort/insertion_sort');
var binary_insert_sort = require('../sort/binary_insert_sort');
var select_sort = require('../sort/select_sort');
var bubble_sort = require('../sort/bubble_sort');
var quick_sort = require('../sort/quick_sort');

var sortMap = ['insertion_sort', 'binary_insert_sort', 'select_sort', 'bubble_sort', 'quick_sort', 'heap_sort'];

var sortFnArray = sortMap.map(function (sort) {
	return require('../sort/' + sort);
});

var makeTestData = function makeTestData() {
	return [3, 4, 5, 3, 3, 23, 4, 54, 3, 2, 21, 3, 4, 1, 2, 4, 6, 644, 4, 3];
};

var testSort = function testSort(data, sortFunction) {
	for (var _len = arguments.length, value = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		value[_key - 2] = arguments[_key];
	}

	console.log('test for ' + sortFunction.name);
	console.log('result is: ' + sortFunction.apply(null, [data].concat(value)));
};

var testSortForData = function testSortForData(makeData) {
	return function (sortFunction) {
		return testSort(makeData(), sortFunction);
	};
};

var testSortForMockData = testSortForData(makeTestData);

console.log('data is : ' + makeTestData());

sortFnArray.forEach(function (sortFunction) {
	return testSortForMockData(sortFunction);
});
