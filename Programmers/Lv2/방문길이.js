function solution(dirs) {
  var answer = 0;
  let visited = {};

  let now = [0, 0];
  dirs.split('').forEach((dir) => {
    let ni = now[0];
    let nj = now[1];
    
    if (dir === "U") nj += 1;
    else if (dir === "D") nj -= 1;
    else if (dir === "L") ni -= 1;
    else ni += 1;

    if (ni >= -5 && ni <= 5 && nj >= -5 && nj <= 5) {
      let tmp = [now, [ni, nj]];
      tmp.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
      const key = JSON.stringify(tmp)
      if(visited[key]) visited[key] += 1
      else visited[key] = 1

      now = [ni, nj]
    }
  });

  return Object.keys(visited).length;
}

console.log(solution("ULURRDLLU"));
console.log(solution("LULLLLLLU"));
