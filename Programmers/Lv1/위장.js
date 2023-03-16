function solution(clothes) {
  var answer = 1;
  let category = {};
  for (let cloth of clothes) {
    if (category[cloth[1]] === undefined) {
      category[cloth[1]] = 1;
    } else {
      category[cloth[1]] += 1;
    }
  }

  for (let value of Object.values(category)) {
    answer *= 1 + value;
  }
  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
