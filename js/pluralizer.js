var plur=function(thing, count){
  if(count==='1'){
      return count+" "+thing;
  }else {
      return count+" "+thing+"s";
  }
}

console.log(plur("cat","5"));
console.log(plur("cat","1"));
