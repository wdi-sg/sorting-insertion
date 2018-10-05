const insertionSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j - 1] > arr[i]) {
      j = j - 1;
    }

    if (j !== i) {
      const min = arr[i];
      for (let k = i; k > j; k--) {
        arr[k] = arr[k - 1];
      }
      arr[j] = min;
    }
  }
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const bubbleSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

const getRandomArray = length => {
  const array = [];

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * (length + 1));
    array.push(random);
  }

  return array;
};

const testArray = [29, 16, 25, 28, 17, 7, 24, 18, 10, 15, 30, 26, 19, 20, 3,
  9, 6, 8, 14, 4, 21, 5, 11, 1, 22, 27, 13, 12, 2, 23];

// console.log(insertionSort(testArray.slice()));
// console.log(bubbleSort(testArray.slice()));

const array = getRandomArray(100000);
// console.log(array);

let then = new Date().getTime();
insertionSort(array.slice());
let now = new Date().getTime();
console.log('Insertion Sort', now - then, 'ms');

then = new Date().getTime();
bubbleSort(array.slice());
now = new Date().getTime();
console.log('Bubble Sort', now - then, 'ms');
