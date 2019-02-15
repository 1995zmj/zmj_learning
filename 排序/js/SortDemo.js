
var arr = [2,238,35,75,32];

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len - 1; j++) {
            if (arr[i] > a[j]) {
                var temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
};

console.log(bubbleSort(arr))