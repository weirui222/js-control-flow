var filter=function(arr, maxLength){
  arrnew=[];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length< maxLength) {
      arrnew.push(arr[i]);
    }
  }
  console.log(maxLength);
  return arrnew;
}

console.log(filter(["as","nisb"],3));
