function solution(fees, records) {
  var answer = [];

  let bill = {};
  records.forEach((record) => {
    // 시간, 차량번호, 상태
    let [strTime, num, state] = record.split(" ");
    // 문자열 시간을 숫자로 변경해주기
    const time = stringToTime(strTime);
    // 아직 없는 번호인 경우
    if (bill[num] === undefined) {
      // 들어간 시간 저장
      bill[num] = [[time, false]];
    } else {
      // 들어가는 차량이라면 들어간 시간과 상태를 리스트에 추가
      if (state === "IN") {
        bill[num].push([time, false]);
      } else {
        // 나오는 차량인 경우
        let last = bill[num].length - 1;
        // 나온 시간 - 맨 마지막으로 들어갔던 시간으로 다시 저장하기
        bill[num][last][0] = time - bill[num][last][0];
        bill[num][last][1] = true;
      }
    }
  });

  // 객체 순회하기
  const keys = Object.keys(bill);
  for (let key of keys) {
    let totalTime = 0;
    // 주차장 이용한 총 시간 계산
    bill[key].forEach((item) => {
      //아직 빠져나가지 않은 차량이라면 23:59(1439 = 23*60 + 59)에 나간것으로 처리
      if (!item[1]) {
        item[0] = 1439 - item[0];
      }
      // 총 시간에 합산
      totalTime += item[0];
    });

    // 요금계산하기
    let totalFee = fees[1];
    // 기본 시간을 초과했다면
    if (totalTime > fees[0]) {
      // 추가 요금 계산하여 합산
      totalFee += Math.ceil((totalTime - fees[0]) / fees[2]) * fees[3];
    }
    // 차량 번호와 합산한 요금 함께 리스트에 담기
    answer.push([key, totalFee]);
  }

  // 차량 번호가 작은 순서대로
  answer.sort((a, b) => a[0] - b[0]);
  // 요금만 따로 추출하기
  return answer.map((a) => a[1]);
}

// 문자열 시간을 숫자로 변환하는 함수 선언
const stringToTime = (str) => {
  const [hour, minute] = str.split(":");
  return Number(hour) * 60 + Number(minute);
};

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
