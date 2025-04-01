const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const fileObj = {};
for (let n = 0; n < N; n++) {
  const [fileName, extenstion] = input[n].split(".");

  if (fileObj[extenstion]) fileObj[extenstion].push(fileName);
  else fileObj[extenstion] = [fileName];
}

const extenstions = Object.keys(fileObj).sort()

for(let extenstion of extenstions) {
    console.log(extenstion ,fileObj[extenstion].length)
}
