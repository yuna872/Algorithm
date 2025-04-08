function solution(numbers) {
  var answer = 0;
  let primeNumSet = new Set();

  const getPermutaion = (arr, fixed) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newFixed = fixed + arr[i];
        let copyArr = [...arr];
        copyArr.splice(i, 1);

        if (isPrimeNum(parseInt(newFixed))) {
          primeNumSet.add(parseInt(newFixed));
        }

        getPermutaion(copyArr, newFixed);
      }
    }
  };

  const isPrimeNum = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }

    return true;
  };

  getPermutaion(numbers, "");

  return primeNumSet.size;
}

console.log(solution("17"));
console.log(solution("011"));
