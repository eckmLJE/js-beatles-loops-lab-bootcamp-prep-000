function theBeatlesPlay(m, i) {
  var myArray = [];
  for (var c = 0; c < m.length; c++) {
    var newPlay = m.slice(c, c+1) + " plays " + i.slice(c, c+1);
    myArray.push(newPlay);
  }
  return myArray;
}

function johnLennonFacts(f) {
  var myArray = [];
  c = f.length;
  i = 0;
  while (myArray.length < c) {
    myArray.push(f.i + "!!!");
    i++
  }
  return myArray;
}