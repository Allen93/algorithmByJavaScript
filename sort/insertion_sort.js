function insertionSort(data){
	var insertIndex = 1, 
		sortIndex,
		length = data.length,
		insertValue,
		compareValue;
	for(; insertIndex < length; insertIndex ++) {
		insertValue = data[insertIndex];
		sortIndex = insertIndex - 1;
		for(; sortIndex >= 0; sortIndex --) {
			compareValue = data[sortIndex];
			if(insertValue < compareValue) {
				data[sortIndex + 1] = compareValue;
			} else {				
				break;
			}
		}
		data[sortIndex + 1] = insertValue;

	}
	return data;
}

module.exports = insertionSort;