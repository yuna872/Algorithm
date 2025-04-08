function deepEqual(obj1, obj2) {
  // 타입 비교
  if (typeof obj1 !== typeof obj2) return false;

  // 기본 자료형 비교 - 배열, 객체인 경우 타입이 'object'
  if (typeof obj1 !== "object" || obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }

  // 키 배열 가져오기
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // 키의 길이가 다르면 false 리턴
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

console.log(
  deepEqual({ a: "deep", b: [1, 2, 3] }, { a: "deep", b: ["1", "2", "3"] })
);

console.log(
  deepEqual(
    { a: "deep", b: ["1", "2", "3"] },
    { a: "deep", b: ["1", "2", "3"] }
  )
);
