function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
// arr[1] > arr[0]
// arr[2] > arr[0]+arr[1]
// arr[3] > arr[0]+arr[1]+arr[2]
// arr[4] > arr[0]+arr[1]+arr[2]+arr[3]

//반복문? 일거같은데 ?
let sum = arr[0];
let result = true; 
for(let i=1; i<arr.length; i++){
  sum = sum + arr[i]
  if(sum > arr[i+1]){
    result = false;
    break;
  }
}
return result
}


let output = superIncreasing([1, 3, 6, 13, 54]);
console.log(output); // --> true

output = superIncreasing([1, 3, 5, 9]);
console.log(output); // --> false