// function solution(bridge_length, weight, truck_weights) {
//   var time = 0;
//   let curWeights = 0;

//   let bridge = [];
//   while (truck_weights.length || bridge.length) {
//     if (
//       curWeights + truck_weights[0] <= weight &&
//       bridge.length <= bridge_length
//     ) {
//       let truck = truck_weights.shift();
//       bridge.push([truck, time + bridge_length]);
//       curWeights += truck;
//       time++;
//     } else {
//       const [truck, passedTime] = bridge.shift()
//       if(time < passedTime) {
//         time = passedTime
//       }
//       curWeights -= truck
//     }
//   }
//   return time + 1;
// }

function solution(bridge_length, weight, truck_weights) {
  var time = 1;

  let curWeight = 0;
  let bridge = [];
  while (truck_weights.length || bridge.length) {
    if (
      curWeight + truck_weights[0] <= weight && // 무게를 넘지 않으며
      bridge.length <= bridge_length // 다리 길이를 넘지 않은 경우
    ) {
      // 트럭 태우기
      let truck = truck_weights.shift();
      bridge.push([truck, time + bridge_length]);
      curWeight += truck;
      time++;
    } else {
      const [truck, passedTime] = bridge.shift();
      if (passedTime > time) {
        time = passedTime;
      }
      curWeight -= truck;
    }
  }
  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
