function findBugInApples(arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 배열안의 배열
    // indexof"B"
    console.log(arr[0].indexOf("B"))
    console.log(arr[1].indexOf("B"))
    
    let result = [];
    for(let i=0; i<arr.length; i++){
      if(arr[i].indexOf('B') !== -1){
        result.push(i)
        result.push(arr[i].indexOf("B"))
      }
    }
    return result
  }
  
  // let output = findBugInApples([['A'], ['B']]);
  // console.log(output); //[1, 0]
  
  output = findBugInApples([
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'B', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ['A', 'A', 'A', 'A', 'A'],
  ]);
  console.log(output); //[1, 1]