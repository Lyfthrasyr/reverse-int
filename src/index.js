module.exports = function reverse(n) {

	let arr = '' + n;
	let newArr = arr.split('');
	if (newArr[0] == '-') {
		newArr.shift();
	}

	let newArray = newArr.reverse();
	let newString = newArray.join('');

	return parseInt(newString);


}