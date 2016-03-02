function selectSort(data){
	var selectIndex,
		compareIndex,
		compareValue,
		length = data.length,
		minIndex,
		minValue;
	for(selectIndex = 0; selectIndex < length; selectIndex ++) {
		minValue = data[selectIndex];
		for(compareIndex = selectIndex + 1; compareIndex < length; compareIndex ++) {
			compareValue = data[compareIndex];
			if(compareValue < minValue) {
				data[selectIndex] = compareValue;
				data[compareIndex] = minValue;
				minValue = compareValue;
			}
		}
	}
	return data;
}

module.exports = selectSort;