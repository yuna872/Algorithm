function solution(want, number, discount) {
  var answer = 0;

  const check = (window, map) => {
    window.forEach((item) => {
      if (!map.has(item)) return;
      const rest = map.get(item);
      map.set(item, rest - 1);
    });
    console.log(map);
  };

  let map = new Map();
  for (let i = 0; i < want.length; i++) {
    map.set(want[i], number[i]);
  }

  for (let i = 0; i < discount.length - 10; i++) {
    const window = discount.slice(i, i + 10);
    check(window, map);
  }

  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
