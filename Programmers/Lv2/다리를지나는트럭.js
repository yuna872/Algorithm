function solution(bridge_length, weight, truck_weights) {
  var time = 0;
  let curWeights = 0;

  let bridge = [];
  while (truck_weights.length || bridge.length) {
    if (
      curWeights + truck_weights[0] <= weight &&
      bridge.length <= bridge_length
    ) {
      let truck = truck_weights.shift();
      bridge.push([truck, time + bridge_length]);
      curWeights += truck;
      time++;
    } else {
      const [truck, passedTime] = bridge.shift()
      if(time < passedTime) {
        time = passedTime
      }
      curWeights -= truck
    }
  }
  return time + 1;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
