// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {



  arr.forEach(function callback(currentValue, index, array) {
    if(currentValue == "Waldo")
      {
        found(index);

      }
      console.log(array);
    //your iterator
  });


}

function actionWhenFound(index1) {
  console.log("Found him at index " + index1 +"!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);