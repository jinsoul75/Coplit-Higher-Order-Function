function removeExtremes(arr) {
    // TODO: 여기에 코드를 작성합니다.
    //제일 짦은거 뽑기
    //제일 긴거 뽑기 => 반복문
    let result = [];
    let a = 1;
    let aIndex;
    let b = 20;
    let bIndex;    

    for(let i=0; i<arr.length; i++){
      if(arr[i].length<=a){
        a = arr[i].length
        aIndex = i
      }
      if(arr[i].length>=b){
        b = arr[i].length
        bIndex = i
      }
    }

    console.log()

  }

let output = removeExtremes(['a', 'b', 'c', 'def']);
console.log(output); // --> ['a', 'b']

// output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
// console.log(output); // --> ['where', 'the', 'word',]