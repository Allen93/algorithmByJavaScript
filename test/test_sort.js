let insertion_sort = require('../sort/insertion_sort');
let binary_insert_sort = require('../sort/binary_insert_sort');
let select_sort = require('../sort/select_sort');
let bubble_sort = require('../sort/bubble_sort');
let quick_sort = require('../sort/quick_sort');

let sortMap = ['insertion_sort',
				'binary_insert_sort',
				'select_sort',
				'bubble_sort',
				'quick_sort', 
				'heap_sort'];

let sortFnArray = sortMap.map((sort) => 
	require('../sort/' + sort)
);

let makeTestData = ()=> [3, 4, 5, 3, 3, 23, 4, 54, 3, 2, 21, 3, 4, 1, 2, 4, 6, 644, 4, 3];


let testSort = (data, sortFunction, ...value) => {
	console.log('test for ' + sortFunction.name);
	console.log('result is: ' + sortFunction.apply(null, [data].concat(value)));
};

let testSortForData = (makeData) => (sortFunction) => testSort(makeData(), sortFunction);

let testSortForMockData = testSortForData(makeTestData);

console.log('data is : ' + makeTestData());

sortFnArray.forEach((sortFunction) => 
	testSortForMockData(sortFunction)
);
