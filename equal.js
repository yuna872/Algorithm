function deepEqual(obj1, obj2) {
  // 자료 타입 비교
  if (typeof obj1 !== typeof obj2) return false;

  // 일반 자료형 비교 -> 주소값이 아닌 경우
  if (typeof obj1 !== "object" || obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }

  // 배열인 경우
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;

    const sorted1 = [...obj1].sort();
    const sorted2 = [...obj2].sort();

    for (let i = 0; i < sorted1.length; i++) {
      if (sorted1[i] !== sorted2[i]) return false;
    }

    return true;
  }

  // key 비교
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

const obj1 = {
  a: "은희",
  b: [1, 2, 3],
};

const obj2 = {
  a: "은희",
  b: [1, 3, "2"],
};

console.log(deepEqual(obj1, obj2));
