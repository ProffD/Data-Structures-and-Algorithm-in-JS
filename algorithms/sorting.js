class Sort {
    constructor(){}

    mergeSort = array => {
        if(array.length < 2) return array;

        const middleIndex = Math.floor(array.length / 2);
        const leftArray = array.slice(0, middleIndex);
        const rightArray = array.slice(middleIndex);

        return  this.merge(
            this.mergeSort(leftArray),
            this.mergeSort(rightArray)
        );
    }

    merge = (leftArray, rightArray) => {
        let resultArray = [];
        while(leftArray.length && rightArray.length){
            if(leftArray[0] < rightArray[0]){
                resultArray.push(leftArray.shift());
            } else {
                resultArray.push(rightArray.shift());
            }
        }
        return [...resultArray, ...leftArray.slice(), ...rightArray.slice()];
    }

}

const sort = new Sort();
const array = [10,2,1,5,3,4,7,9,6,8,11,15,14,12,16,13,20,19,18,17];
console.time();
console.log('Using Merge sort: ',sort.mergeSort(array));
console.timeEnd();


































