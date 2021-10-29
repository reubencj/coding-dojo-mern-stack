/*
- take in a array
- choose a pivot which will be a random value
- start 2 variables i and j




*/

const unsorted = [3,50,68,6,10,1,49,0]; 

//const randomNumber = max => Math.floor(Math.random() * max);


//let pivotIndex = randomNumber(unsorted.length);
let pivotindex = 0
let pivotValue = unsorted[pivotindex];
let low = pivotindex;
let high = unsorted.length -1; 


while (unsorted[low] <= pivotValue){
  if  (low >= unsorted.length) {
    break;
}
    low++;
    console.log(`low index is ${low} and value is ${unsorted[low]}`);
}

while (unsorted[high]>= pivotValue){
    if (high <= 0){
        break;
    }
    high--;
    console.log(`high index is ${high} and value is ${unsorted[high]}`);
}

// while (unsorted[high]> pivotValue || high >=0){
//     console.log(`high index is ${high} and value is ${unsorted[high]}`);
//     high--;

// }








