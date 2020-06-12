function findMissingNumber(mArr) {
  let x=mArr[0];
  for(let i=1;i<mArr.length;i++){
    if(x+i!=mArr[i]){
      return x+i
    }
  }
  return ("not found")
}

function getCumulativeSum(mArr) {
  let myArr=[];
  let tempSum=0;
  for(let i=0;i<mArr.length;i++){
    tempSum+=mArr[i]
    myArr.push(tempSum)
  }
  return myArr
}

function removeDuplicates(mArr) {
  mArr.sort((a,b)=>{
    return a-b;
  })

  let length=mArr.length
  let count=0;
  for(let i=0;i<length;i++){
    for(let j=i;j<length;j++){
      if(mArr[i]==mArr[j]){
      count++;
    }else break;
    }
    if(count>1){
      mArr.splice(i,count-1);
      length--;
      i=0
    }
    count=0;

  }
  return mArr
}
