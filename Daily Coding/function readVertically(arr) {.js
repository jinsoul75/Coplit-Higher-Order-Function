function readVertically(arr) {
  // TODO: 여기에 코드를 작성합니다.
  console.log(arr[0][0])
  console.log(arr[1][0])
  console.log(arr[0][1])
  console.log(arr[1][1])
  console.log(arr[0][2])
  console.log(arr[1][2])
  let result = ""
  let longer =[];
  for(let i=0; i<arr.length; i++){
    longer.push(arr[i].length);
  }
maxNum = Math.max(...longer)

  for(let i=0; i<maxNum; i++){
    for(let j=0; j<arr.length; j++){
      if(arr[j][i] === undefined){
        continue;
      }
      result += arr[j][i]
    }
  }
  return result
}


// let input = [
//   //
//   'hello',
//   'wolrd',
// ];
// let output = readVertically(input);
// console.log(output); // --> 'hweolllrod'

input =  ['YCDt', 'oao', 'unI']
output = readVertically(input);
console.log(output); // 'YouCanDoIt'