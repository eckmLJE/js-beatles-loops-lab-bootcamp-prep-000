function theBeatlesPlay(m, i) {
  var myArray = [];
  for (var c = 0; c <= m.length; c++) {
    var newPlay = m.slice(c, c+1) + " plays " + i.slice(c, c+1);
    myArray.push(m.slice(c, c+1))
  }
  return myArray;
}

