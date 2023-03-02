function solution(routes) {
  var camera = 1;

  const sorted = routes.sort((a, b) => {
    return a[0] - b[0];
  });

  let lastPoint = sorted[0][1];
  for (let route of sorted) {    
    if (lastPoint < route[0]) {
      camera++;
      lastPoint = route[1]
    } 

    if(lastPoint > route[1]) {
      lastPoint = route[1]
    }
  }
  return camera;
}

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);
