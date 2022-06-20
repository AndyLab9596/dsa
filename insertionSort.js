/**
 * Insertion Sort
 * -> Builds up the sort by gradually creating a larger left half which is always sorted
 * 
 * Pseudo code
 * - Start by picking the second element in the array
 * - Now compare the second element with the one before it and swap if necessary
 * - Continue to the next element and if it is in the incorrect order,
 * iterate through the sorted portion (i.e the left side) to place the element in the correct place
 * - Repeat until the array is sorted
 */

 function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        console.log(j);
        console.log(arr[j + 1], currentVal)
        arr[j+1] = currentVal;
    }
    return arr;
}


const insertionSortVersion2 = (array) => {
    for (let i = 1; i < array.length; i++) {

        for (let j = i; j > 0; j-- ) {
            if(array[j] < array[j - 1]) {
                const temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            } else {
                break;
            }
        }
    }

    return array
}

// insertionSort([2,1,9,76,4])

console.log(insertionSort([2, 1, 9, 76, 4]))