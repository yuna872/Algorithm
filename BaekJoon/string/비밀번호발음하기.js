const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev.stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const vowels = ["a", "e", "i", "o", "u"];

const hasVowel = (password) => {
  for (let s of password) {
    if (vowels.includes(s)) return true;
  }
  return false;
};

const noThree = (password) => {
  if (password.length >= 3) {
    for (let i = 0; i < password.length - 2; i++) {
      if (
        vowels.includes(password[i]) &&
        vowels.includes(password[i + 1]) &&
        vowels.includes(password[i + 2])
      )
        return false;
      if (
        !vowels.includes(password[i]) &&
        !vowels.includes(password[i + 1]) &&
        !vowels.includes(password[i + 2])
      )
        return false;
    }
  }
  return true;
};

const noDouble = (password) => {
  if (password.length >= 2) {
    for (let i = 0; i < password.length - 1; i++) {
      if (
        password[i] === password[i + 1] &&
        password[i] != "o" &&
        password[i] != "e"
      )
        return false;
    }
  }
  return true;
};

for (let t = 0; t < input.length; t++) {
  const password = input[t];

  if (password === "end") break;

  if (
    hasVowel(password) &&
    noThree(password) &&
    noDouble(password)
  )
    console.log("<" + password + "> is acceptable.");
  else console.log("<" + password + "> is not acceptable.");
}
