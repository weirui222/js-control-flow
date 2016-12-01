var inputString = 'building';
function reverse(inputString){
  var outputString = '';
  for (var i = inputString.length-1; i >= 0; i--) {
    outputString+= inputString[i];
  }
  console.log(outputString);
  return 0;
}

reverse(inputString);
reverse("steve");
