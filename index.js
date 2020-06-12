function findMissingNumber(mArr) {
  let x=mArr[0];
  for(let i=1;i<mArr.length;i++){
    if(x+i!=mArr[i]){
      return mArr[i]-1
    }
  }
  return ("not found")
}

function getCumulativeSum(mArr) {
  let myArr=[];
  let tempSum=0;
  for(let i=0;i<mArr.length;i++){
    for(j=0;j<=i;j++){
      tempSum=tempSum+mArr[j];
    }

      myArr.push(tempSum);
    
    tempSum=0;
  }
  return myArr
}

function removeDuplicates(mArr) {
  mArr.sort((a,b)=>{
    return a-b;
  })
  console.log(mArr)
  let length=mArr.length
  for(let i=0;i<length;i++){
    if(mArr[i]==mArr[i+1]){
      mArr.splice(i,1)
      length=length-1;
      i=0;
    }
  }
  return mArr
}