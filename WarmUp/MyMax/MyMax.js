
function MyMax(array) {
  var max = array[0];
  for (i = 1; i < array.length; i++) {
    (array[i] > max) && (max = array[i])
  }

  return max
  
}

alert(MyMax([50, 78, 1, 280, 12, 400]));
 