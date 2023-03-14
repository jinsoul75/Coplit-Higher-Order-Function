function studentReports(students) {
  // TODO: 여기에 코드를 작성합니다.
  // gender가 여성인것만 걸러준 배열을 만든다
  let isFemale = students.filter((el) => el.gender === "female");

  //'grades'란 속성값 (배열)을 평균으로 만든다.
  console.log(isFemale);

  // 리턴값은 배열의 요소가 하나씩 콜백함수를 거쳐 배열로 리턴되어야 한다.
  return isFemale.map((el) => {
    const sum = el.grades.reduce((acc, cur) => {
      return acc + cur;
    }); //grades 요소들의 합 2,3,4
    console.log(sum);

    const avrOfGrades = sum / el.grades.length;
    console.log(avrOfGrades);

    el.grades = avrOfGrades;
    console.log(el);
    return el;
  });
}
