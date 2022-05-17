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
}

const search = new Search();
const array = [1,2,10,5,3,4,7,9,6,8,11,15,14,12,16,13,20,19,18,17];
const targetValue = 15;
const index = search.sequencialSearch(array,targetValue);
console.log( index > 0 ? targetValue + ' was found at index ' + index : targetValue + ' was not found.');
