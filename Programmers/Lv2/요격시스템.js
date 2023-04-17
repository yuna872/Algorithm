function solution(targets) {
  // 요격 횟수
  var answer = 0;

  // 구간의 시작을 중심으로 오름차순 정렬
  targets.sort((a, b) => a[0] - b[0]);

  let point = 0; // 범위의 끝을 기억하는 변수
  targets.forEach((target) => {
    // 일단 한발 쏘기
    answer++;
    // 미사일 구간이 이전에 쏜 요격 미사일로 커버할 수 있으면
    if (point > target[0]) {
      answer--; // 요격 취소
      // 겹치는 구간의 끝점을 point로 설정
      point = Math.min(point, target[1]);
    } else {
      // 새로 한발 쏴야하는게 맞다면 현재 날아온 미사일의 구간의 끝을 point로 설정
      point = target[1];
    }
  });
  return answer;
}
