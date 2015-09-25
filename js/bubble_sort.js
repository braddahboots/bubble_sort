function bubbleSort(arry) {
 var numArray = arry;
    var count = 0;
    var pass = null;

    //iterate through array and sort all of the index to go from smallest to largest value
    function _sort() {
      do {
        pass = false;
        for(var i = 0; i < numArray.length; i++) {
          if(numArray[i] > numArray[i + 1]) {
            current = numArray[i];
            numArray[i] = numArray[i + 1];
            numArray[i + 1] = current;
            pass = true;
            count ++;
          }
        }
      }while (pass);
    }

    //returns the count value;
    function counter() {
      return count;
    }

    return {
      sort : _sort(),
      counter: counter()
    };

}

// var gumMachine = [9, 3, 1, 10, 5];
// bubbleSort(gumMachine);

// console.log(gumMachine);

// module.exports = bubbleGum;