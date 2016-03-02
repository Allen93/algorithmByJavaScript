var _ = {};

function _toString(obj) {
	return Object.prototype.toString.call(obj);
}


_.isArray = function(arr) {
	return arr && _toString(arr) === '[object Array]';
}

_.swap = function(data, i, j) {
	var length = data.length,
		temp;
	if(i > length || j > length) {
		return data;
	}
	temp = data[i];
	data[i] = data[j];
	data[j] = temp;
	return data;
};

module.exports = _;