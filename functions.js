const testArray = [
    29,
    16,
    25,
    28,
    17,
    7,
    24,
    18,
    10,
    15,
    30,
    26,
    19,
    20,
    3,
    9,
    6,
    8,
    14,
    4,
    21,
    5,
    11,
    1,
    22,
    27,
    13,
    12,
    2,
    23
];

const insertionSort = arr => {
  for (i in arr) {
    let value = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = value;
  }
  return arr;
};

const bubbleSort = arr => {
  for (i in arr) {
    for (j in arr) {
      if (arr[j - 1] > arr[j]) {
        let tempValue = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = tempValue;
      }
    }
  }
  return arr;
};
console.log(bubbleSort(testArray));
