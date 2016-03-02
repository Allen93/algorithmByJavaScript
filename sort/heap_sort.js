var _ = require('../utils');

function heapSort(data){
	var length;
	buildMaxHeap(data);
	for(length = data.length - 1; length > 0; length --) {
		_.swap(data, 0, length);
		maxHeap(data, 0, length);
	} 
	return data;
}	
function maxHeap(array, index, heapSize) {
	var left,
		right,
		heapSize,
		maxIndex,
		changed;
	while(true) {
		maxIndex = index;
		right = 2 * index + 2;
		left = 2 * index + 1;
		if(left < heapSize && array[left] > array[maxIndex]) {
			maxIndex = left;
		}
		if(right < heapSize && array[right] > array[maxIndex]) {
			maxIndex = right;
		}
		if(maxIndex != index) {
			_.swap(array, index, maxIndex);
			index = maxIndex;
		} else {
			break;
		}
	}
}

function buildMaxHeap(array) {
	var length = array.length,
		startIndex = Math.floor(length / 2) - 1,
		i;
	for(i = startIndex; i >= 0; i--) {
		maxHeap(array, i, length);
	}
}

module.exports = heapSort;