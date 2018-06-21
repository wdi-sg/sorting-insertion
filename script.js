// var arr = process.argv[2];
// var arr = [29, 16, 25, 28, 17, 7, 24, 18, 10, 15, 30, 26, 19, 20, 3, 9, 6, 8, 14, 4, 21, 5, 11, 1, 22, 27, 13,  12, 2, 23];

function sort (arr) {
    let length = arr.length;
    for(let i=1; i<length; i++) {
        let temp = i;
        for(let a=i-1; a>=0; a--) {
            if(arr[temp]<arr[a]) {
                let add = arr[temp];
                arr.splice(temp,1);
                arr.splice(a,0,add);
                temp--;
            }
        }
    }

    // console.log(arr);
}


function bubbleSort (arr) {
    let length = arr.length;
    for(let i=0; i<arr.length-1; i++) {
        for(let a=1; a<length; a++) {
            if(arr[a]<arr[a-1]) {
                let add = arr[a];
                arr.splice(a,1);
                arr.splice(a-1,0,add);
            }
        }
        length --;
    }
    // console.log(arr);
}




function checkLength () {
    let array = [];
    for(var i=0; i<1000000; i++) {
        array.push(Math.floor(Math.random * 1000000));
    }
    var then = new Date().getTime();
    sort(array);
    var now = new Date().getTime();
    console.log(now - then, 'ms');

    
    var then1 = new Date().getTime();
    bubbleSort(array);
    var now1 = new Date().getTime();
    console.log(now1 - then1, 'ms');
}


checkLength();

// run some code that should hopefully take a noticeable amount of time to complete, e.g. > 15ms.
