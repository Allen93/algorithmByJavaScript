function bubbleSort(data){

	function exchange(i, j) {
		var temp = data[i];
		data[i] = data[j];
		data[j] = temp;
	}

	var length = data.length,
		sortedIndex = length,
		exchanged = false,
		sortIndex,
		insertValue,
		compareValue;
	for(sortedIndex; sortedIndex > 0; sortedIndex --) {
		for(sortIndex = 0; sortIndex < sortedIndex - 1;  sortIndex ++) {
			if(data[sortIndex] > data[sortIndex + 1]) {
				exchange(sortIndex, sortIndex + 1);
				exchanged = true;
			}
		}
		if(!exchanged) {
			return data;
		}
	}
	return data; 
}

module.exports = bubbleSort;