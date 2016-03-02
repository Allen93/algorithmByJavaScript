var _ = require('../utils');
function quickSort(data, left, right, pivotIndex){
	if(right < left) {
		return;
	}
	left = left || 0;
	right = right !== undefined ? right : data.length - 1;
	pivotIndex = pivotIndex || right;
	_.swap(data, pivotIndex, right);
	var i,
		storeIndex = left;
		pivotValue = data[pivotIndex];
	for(i = left; i < right; i++ ) {
		if(data[i] < pivotValue) {
			_.swap(data, i, storeIndex);
			storeIndex ++;
		}
	}
	_.swap(data, storeIndex, right);
	quickSort(data, left, storeIndex - 1);
	quickSort(data, storeIndex + 1, right);
	return data;
}

module.exports = quickSort;