function insertionSorting(array) {
  let arr = array.slice(0);

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
        if (arr[i] < arr[j]) {
            if (j - 1 >= 0) {
                if (arr[i] >= arr[j-1]) {
                    let holderValue = arr[i];

                    arr.splice(i, 1);
                    arr.splice(j, 0, holderValue);
                }
            } else {
                let holderValue = arr[i];

                arr.splice(i, 1);
                arr.splice(0, 0, holderValue);
            }
        }
    }
  }
  console.log(arr);

};

function bubbleSorting(array) {
  let arr = array.slice(0);

  let didSwapped = false
  let i = 0;
  let j = 1;

  while (true) {
    if (arr[i] > arr[j]) {
      let holderOne = arr[i];
      let holderTwo = arr[j];

      arr[i] = holderTwo;
      arr[j] = holderOne;

      didSwapped = true;
    }

    i += 1;
    j += 1;

    if (i >= arr.length - 1 && j >= arr.length) {
      i = 0;
      j = 1;
      if (didSwapped === false) {
        break;
      } else {
        didSwapped = false;
      }
    }
  }
  console.log(arr);
};

var testArray = [29, 16, 25, 28, 17, 7, 24, 18, 10, 15, 30, 26, 19, 20, 3, 9, 6, 8, 14, 4, 21, 5, 11, 1, 22, 27, 13,  12, 2, 23, 28934, 0, -5, 123, 6, 888]

insertionSorting(testArray);
bubbleSorting(testArray);
