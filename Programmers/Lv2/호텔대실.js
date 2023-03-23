function solution(book_time) {
  let arr = [];

  book_time.forEach((time) => {
    let checkIn = stringToTime(time[0]);
    let chectOut = stringToTime(time[1]);
    // 체크인, 체크아웃 + 청소시간 배열에 저장
    arr.push([checkIn, chectOut + 10]);
  });

  // 입실시간 오름차순으로 정렬하기
  arr.sort((a, b) => a[0] - b[0]);

  let room = [arr[0][1]];
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < room.length; j++) {
      // 입실할 수 있는 조건이면
      if (room[j] <= arr[i][0]) {
        // 입실하고
        room[j] = arr[i][1];
        // 다음 손님으로 넘어가기
        break;
      } else {
        // 입실할 수 없고 모든 방을 조회했다면
        if (j === room.length - 1) {
          // 새로운 방을 생성하고
          room.push(arr[i][1]);
          // 다음 손님으로 넘어가기
          break;
        }
      }
    }
  }
  // 사용된 방의 개수를 출력
  return room.length;
}

// 문자열을 시간으로 변환하기
const stringToTime = (str) => {
  const [hour, minute] = str.split(":");
  return parseInt(hour) * 60 + parseInt(minute);
};

console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
);
console.log(
  solution([
    ["09:10", "10:10"],
    ["10:20", "12:20"],
  ])
);
console.log(
  solution([
    ["10:20", "12:30"],
    ["10:20", "12:30"],
    ["10:20", "12:30"],
  ])
);
