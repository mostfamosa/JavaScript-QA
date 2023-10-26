Array.prototype.splice = function (start, deleteCount, ...items) {
    const data = this;

    let resultArray = [];

    if (start < 0) {
        start = start + data.length;
    }

    if (deleteCount === undefined) {
        deleteCount = data.length - start;
    }

    let removedItems = [];

    //add all items to the result array until START
    for (let i = 0; i < start; i++) {
        resultArray.push(data[i]);
    }

    //add the removed items to removedItems array
    for (let i = start; i < start + deleteCount && i < data.length; i++) {
        removedItems.push(data[i]);
    }

    //if there is another items
    if (items.length > 0) {
        for (const item of items) {
            resultArray.push(item);
        }
    }

    //add to the rest of the items
    for (let i = start + deleteCount; i < data.length; i++) {
        resultArray.push(data[i]);
    }

    this.length = resultArray.length;
    for (let i = 0; i < resultArray.length; i++) {
        this[i] = resultArray[i];
    }

    return removedItems;
};

// TESTS

// remove 1 element
let arr = [1,2,3]
arr.splice(0,1); 
console.log(arr); //should be [2,3]

// add 1 element
arr = [1,2,3]
arr.splice(0,0,0); 
console.log(arr); //should be [0,1,2,3]

// replace 1 element
arr = [1,2,3]
arr.splice(1,1,55); 
console.log(arr); //should be [1,55,3] 

// delete all elements from index to end
arr = [1,2,3,4,5]
arr.splice(1); 
console.log(arr); //should be [1] 

// returns array of deleted elements
arr = [1,2,3]
let deleted = arr.splice(1); 
console.log(deleted); //should be [2,3] 

// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = arr.splice(1,1); 
console.log(deleted); //should be [2] 

// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = arr.splice(1,0,5); 
console.log(deleted); //should be [] 
