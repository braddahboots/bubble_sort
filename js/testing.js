function bubbleSortOnWeb() {

  var module = {
    init : _init
  };

  function _init(arry) {
    this.bubbleGrid = bubbleGrid();
    this.bubbleSort = _bubbleSort();
  }

  function bubbleGrid() {
    var grid = document.createElement('table');
    var row = 1;
    var cols = 5;

     for(var i = 0; i < rows; i++) {
      row = document.createElement('tr');
      row.className = 'row';
      for(var j = 0; j < cols; j++) {
        nums = _bubbleSort(numArray);
        row.appendChild(nums);
      }
      paletteDiv.appendChild(row);
    }
    document.body.appendChild(grid);
  }

  function _bubbleSort(arry) {
    var numArray = arry;
    var count = 0;
    var swap = null;


    function _sort() {
      do {
        swap = false;
        for(var i = 0; i < numArray.length; i++) {
          if(numArray[i] > numArray[i + 1]) {
            current = numArray[i];
            numArray[i] = numArray[i + 1];
            numArray[i + 1] = current;
            swap = true;
            count ++;
          }
        }
      }while (swap);
    }

    function counter() {
      return count;
    }

    return {
      sort : _sort(),
      counter: counter()
    };

  }
  console.log(module);
  return module;

}
  // var testArray = numArray.reduceRight(function(previous, current, index, array) {
  //   if(Math.min(previous, current) >= previous) {
  //     console.log(Math.min(previous, current));
  //     return numArray.push(previous);
  //   } else {
  //     numArray.push(current);
  //   }
  //   // count++;
  // },0);

//   function _counter() {
//     return count;
//   }

//   return {
//     counter: _counter()
//   };


var gumMachine = [9, 3, 1, 10, 5];
bubbleSortOnWeb.init(gumMachine);

console.log(gumMachine);

// module.exports = bubbleGum;