function solution(users, emoticons) {
  const len = emoticons.length;

  // 모든 경우의 수를 구하는 함수
  const combination = () => {
    const cases = [];
    // 재귀함수로 구현
    const getCombination = (curCase) => {
      if (curCase.length === len) {
        cases.push(curCase);
        return;
      }

      for (let rate of [0.1, 0.2, 0.3, 0.4]) {
        getCombination([...curCase, rate]);
      }
    };
    // 함수 호출하기
    getCombination([]);
    return cases;
  };

  // 모든 경우의 판매율 조합
  const cases = combination();
  // 모든 경우의 [가입자수, 판매액]을 담을 배열
  let res = [];
  cases.forEach((arr) => {
    let join = 0;
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
      // 판매액
      let purchase = 0;
      for (let j = 0; j < len; j++) {
        // 00 퍼센트 이상 할인하면
        if (users[i][0] * 0.01 <= arr[j]) {
          // 구매하기
          purchase += (1 - arr[j]) * emoticons[j];
          // 기준 금액을 초과하면
          if (purchase >= users[i][1]) {
            // 가입하기
            join++;
            break;
          }
        }
      }
      // 가격을 넘지 않은 경우에만 판매액으로 합산
      if (purchase < users[i][1]) sum += purchase;
      // 가입자 수와 판매액 result에 저장
      res.push([join, sum]);
    }
  });

  // 가입자 수 내림차순, 판매액 내림차순으로 정렬
  res.sort((a, b) => b[0] - a[0] || b[1] - a[1]);

  // 맨 처음 원소가 답
  return res[0];
}
