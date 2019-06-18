var a = ()=>{
  var sum = [1,2,3,4,5].reduce((sum,item)=>{
    return sum+item
  });
  return sum
}