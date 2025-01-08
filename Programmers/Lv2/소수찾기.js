function solution(numbers) {
  let arr = numbers.split("");

  let permutationSet = new Set();
  const getPermutaion = (arr, fixed) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newPermutaion = fixed + arr[i];
        const copyArr = [...arr];
        copyArr.splice(i, 1);
        permutationSet.add(+newPermutaion);
        getPermutaion(copyArr, newPermutaion);
      }
    }
  };

  const isPrimeNum = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  getPermutaion(arr, "");

  return Array.from(permutationSet).filter((v) => isPrimeNum(v)).length;
}

console.log(solution("17"));
console.log(solution("011"));
console.log(solution("121"));
