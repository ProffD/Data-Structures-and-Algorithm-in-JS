class Search {
    constructor(){}

    sequencialSearch = (array, targetValue) => {
        for(let i = 0; i < array.length; i++) {
           if(array[i] === targetValue){
              return i;
           }            
        };
        return -1;
    }

    binarySearch = (array, targetValue) => {
        //Normal flow
        let leftIndex = 0;
        let rightIndex = array.length - 1;
        while(leftIndex <= rightIndex) {
            const middleIndex = leftIndex +  Math.floor((rightIndex - leftIndex) / 2);
            if(targetValue === array[middleIndex]) {
                return middleIndex;
            }
            else if(targetValue < array[middleIndex]){
                rightIndex = middleIndex - 1;
            }
            else {
                leftIndex = middleIndex + 1;
            }

        }
        
        return -1;
        // Using recursion
        //this.binarySearchHelper(array, targetValue, 0, array.length - 1);
    }

    binarySearchHelper = (array, targetValue, leftIndex, rightIndex) => { 
        if(leftIndex > rightIndex) return -1;

        const middleIndex = leftIndex +  Math.floor((rightIndex - leftIndex) / 2);
        if(targetValue === array[middleIndex]) {
            return middleIndex;
        }
        else if(targetValue < array[middleIndex]){
            return binarySearchHelpe(array,targetValue, leftIndex, middleIndex - 1);
        }
        else {
            return binarySearchHelpe(array,targetValue,  middleIndex + 1, rightIndex);
        }
    }
}

const search = new Search();
const array = [1,2,10,5,3,4,7,9,6,8,11,15,14,12,16,13,20,19,18,17];
const targetValue = 1;
const index = search.sequencialSearch(array,targetValue);
console.log('====================Using Sequencial search========================');
console.log( index >= 0 ? targetValue + ' was found at index ' + index : targetValue + ' was not found.');
console.log('====================Using Binary search========================')
array.sort((a,b) => a - b); // For binary search we need to pass in sorted array
const result = search.binarySearch(array,targetValue);
console.log( result >= 0 ? targetValue + ' was found at index ' + index : targetValue + ' was not found.');

