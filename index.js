// loop through array of integers
// start from index [1]
// if [i] < [i-1]
// use splice to insert first element of array

var testArray = [29, 16, 25, 28, 17, 7, 24, 18, 10, 15, 30, 26, 19, 20, 3, 9, 6, 8, 14, 4, 21, 5, 11, 1, 22, 27, 13, 12, 2, 23];



function arraySort(testArray) {
	for(var i = 1; i < testArray.length; i++) {
		for(var j = 0; j < i; j++) {
			if(testArray[i] < testArray[j]) {
				let removed = testArray.splice(i, 1)[0];
				testArray.splice(j, 0, removed);
			};
		};
	};
	return testArray
};

console.log(arraySort(testArray));
