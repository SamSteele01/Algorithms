function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    // start with current
    let newInv = arr1;

    // get array of new inventory names
    let invNames = arr1.map(value => {
      return value[1];
    })
    // console.log(newInvNames);

    function findIndexByName(array, name) {
      let ndx = 0;
      array.map((item, index) => {
        if (item[1] === name) ndx = index;
      })
      return ndx;
    }

    // add or update values
    arr2.map((value, index) => {
      // console.log(value);
      if (!invNames.includes(value[1])) {
        // add
        // console.log(value[1]);
        newInv.push(value);
      } else {
        // update
        newInv[findIndexByName(newInv, value[1])][0] += value[0];
      }
    })
    console.log(newInv);

    // sort
    newInv.sort((a, b) => {
      if (a[1] < b[1]) {
        return -1;
      }
      if (a[1] > b[1]) {
        return 1;
      }
      return 0;
    })
    
    console.log(newInv);
    return newInv;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);