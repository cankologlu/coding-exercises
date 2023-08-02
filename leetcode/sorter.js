// IN an unsorted array of integers

// OUT an array of sorted integers

array = [5,28,12,3,1,89,6,2]

const sorter = (array) => {
    let resultArray = [];
    
    while(array.length > 0) {
        let smallest = 0
        for (let i = 1; i < array.length; i++) {
            if(array[i] < array[smallest]) {
                smallest = i;
            }
        }
         resultArray.push(array[smallest])
         array.splice(smallest, 1)
    }
    return resultArray;
}

console.log(sorter(array))