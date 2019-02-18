
var arr = [2, 238, 35, 75, 32];

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {        // 相邻元素两两对比
                var temp = arr[j + 1];        // 元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
function selectionSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        var minp = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minp]) {
                minp = j;
            }
        }
        var temp = arr[minp];
        arr[minp] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

function insertionSort(arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        var preIndex = i - 1;
        var current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }

        arr[preIndex + 1] = current;
    }
    return arr;
}

function shellSort(arr) {
    var len = arr.length;

    var gap = 1;
    while (gap < len / 3) {
        gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (var i = gap; i < len; i++) {
            var temp = arr[i];
            for (var j = i - gap; j > 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}

// console.log(bubbleSort(arr))
// console.log(selectionSort(arr))
// console.log(insertionSort(arr))
console.log(shellSort(arr))