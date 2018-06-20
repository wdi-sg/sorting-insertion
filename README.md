# Algorithms: Sorting (Insertion)

Today, we are going to implement a well-known sorting algorithm called the `insertion sort`. For details on this algorithm, refer to https://en.wikipedia.org/wiki/Insertion_sort. In brief, you will need to write a function that takes an array of integers, and returns a sorted version of that array. To sort the array, the function must:

- Start with the 2nd element of the array.
    - For example, for the array `[4, 3, 6, 7, 1]`, we first look at `3`.
- Compare it with the 1st element. If its value is less than the 1st element, insert it into the 1st element's position, effectively swapping their places in the array. Otherwise, do nothing.
    - In the above example, since `3` is less than `4`, at the end of this step, the array would be `[3, 4, 6, 7, 1]`.
- Move to the 3rd element of the array.
    - We now look at `6` in the above example.
- Compare it with all the elements that come before it in the array, i.e. the 1st and 2nd elements now. Insert it into its correct position, i.e. if its value is greater than the 1st element's but less than the 2nd element's, insert it into the 2nd element's place. Otherwise, do nothing.
    - In the example, since `6` is greater than `3` and `4`, we do nothing.
- Move to the next element of the array and repeat the previous 2 steps. Continue this until you reach the end of the array.
    - In the example, the next element is `7`, and comparing it to the 1st 3 elements, we do nothing. But the last element `1` is less than the 1st element, so we insert it into the 1st position. So the final sorted array is `[1, 3, 4, 6, 7]`.

Write your function in a .js file. You may run it either in a browser, for which you will need an accompanying index.html file that loads it, or via NodeJS. Test your algorithm on the following array:

`var testArray = [29, 16, 25, 28, 17, 7, 24, 18, 10, 15, 30, 26, 19, 20, 3, 9, 6, 8, 14, 4, 21, 5, 11, 1, 22, 27, 13,  12, 2, 23]`

Your function should return a sorted array of the first 30 integers.

## Bonus: Bubble Sort
Read about another sorting algorithm called the `bubble sort` at https://en.wikipedia.org/wiki/Bubble_sort. Write a function that implements it.

## Bonus: Benchmark your two sorting algorithm implementations
Generate a random array of integers of a sizeable length, e.g. a shuffled array of the first 10000000 integers. Apply each of your sorting algorithms to the array and time how long it takes for your algorithms to complete. Which is faster on average? What are the worst timings achieved by each algorithm? _Important: Make sure not to change the original array in each of your functions when benchmarking, otherwise your second function will be attempting to sort an already sorted array._

You can time how long a piece of code takes to run by the following:

```
var then = new Date().getTime();
// run some code that should hopefully take a noticeable amount of time to complete, e.g. > 15ms.
var now = new Date().getTime();
console.log(now - then, 'ms');
```

The logged message will display the time in ms that the code took to run.