function binaryInsertSort(data){
	var length = data.length,
		insertIndex,
		insertValue,
		maxIndex,
		minIndex,
		midlleIndex;
	for(insertIndex = 1; insertIndex < length; insertIndex++) {
		maxIndex = insertIndex - 1;
		minIndex = 0;
		insertValue = data[insertIndex];
		while(minIndex <= maxIndex) {
			midlleIndex = parseInt((maxIndex + minIndex) / 2);
			if(insertValue > data[midlleIndex]) {
				minIndex = midlleIndex + 1;
			}else {
				maxIndex = midlleIndex - 1;
			}
		}
		for(var i = insertIndex ; i > minIndex; i--) {
			data[i] = data[i-1];
		}
		data[minIndex] = insertValue;
	}
	return data;
}

module.exports = binaryInsertSort;