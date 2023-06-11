function solution(orders, course) {
  var answer = [];
  let res = new Map();

  orders.forEach((order) => {
    course.forEach((len) => {
      if (order.length >= len) {
        // 주어진 코스 개수로 만들 수 있는 메뉴 조합 찾기
        const combinations = combination(order.split(""), len);
        combinations.forEach((combination) => {
          // 조합끼리 비교하기 위해서 알파벳 순으로 정렬한뒤 문자열로 변환
          const str = combination.sort().join("");
          // 없으면 추가, 있으면 +1
          if (!res.has(str)) res.set(str, 1);
          else res.set(str, res.get(str) + 1);
        });
      }
    });
  });

  // 코스 길이 별로 분류하는 작업
  const dict = {};
  res.forEach((value, key) => {
    const len = key.length;
    if (dict[len]) dict[len].push([key, value]);
    else dict[len] = [[key, value]];
  });

  // 사람들이 가장 많이 주문한 메뉴 조합을 구하기
  const keys = Object.keys(dict);
  keys.forEach((len) => {
    // 내림차순으로 정렬한뒤 최대값 찾기
    const arr = dict[len].sort((a, b) => b[1] - a[1]);
    const maxV = arr[0][1];
    // 2명 이상이 주문한 조합일 때만 정답에 추가하가
    if (maxV >= 2) {
      let i = 0;
      while (maxV === arr[i][1]) {
        answer.push(arr[i][0]);
        i++;
      }
    }
  });

  return answer.sort();
}

// 조합을 구하는 함수
const combination = (arr, n) => {
  // 배열의 길이가 1일 때는 자기 자신을 담은 배열 return
  if (n === 1) return arr.map((item) => [item]);

  const res = [];
  arr.forEach((item, idx) => {
    // 현재 노드를 선택한 뒤 이후의 배열에서 n-1개 선택하기
    const smallCombinations = combination(arr.slice(idx + 1), n - 1);
    // 나머지 조합과 현재 노드를 더한 배열 res에 추가하기
    smallCombinations.forEach((combination) => {
      res.push([item, ...combination]);
    });
  });
  return res;
};

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
