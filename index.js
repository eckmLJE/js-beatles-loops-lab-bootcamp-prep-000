function theBeatlesPlay(m, i) {
  var myArray = [];
  for (var c = 0; c <= m.length; c++) {
    myArray.push(m.slice(c, c+1))
  }
  return myArray;
}

