function firstCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  // split로 문자를 나눠서 첫번째 글자를 모아리턴하고싶다
  const newStr = str.split(" ");
  let result = "";
  if (str.length === 0) return result;
  for (let i = 0; i < newStr.length; i++) {
    result += newStr[i][0];
  }
  return result;
}

let output = firstCharacter("hello world");
console.log(output); // --> "hw"

output = firstCharacter(
  "The community at Code States might be the biggest asset"
);
console.log(output); // --> "TcaCSmbtba"
