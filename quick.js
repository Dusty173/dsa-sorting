/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length -1){
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    let piv = arr[start]
    let swapIdx = start;

    for(let i = start + 1; i <= end; i++){
        if (piv > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right){
        let pivIdx = pivot(arr, left, right);
        quickSort(arr, left, pivIdx -1);
        quickSort(arr, pivIdx + 1, right);
    }
    return arr;
}

module.exports = { pivot, quickSort};