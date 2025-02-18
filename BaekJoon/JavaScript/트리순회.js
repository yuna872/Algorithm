const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

class BTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const preorder = (node) => {
  if (node === '.') return;
  answer += node
  preorder(tree[node][0]);
  preorder(tree[node][1]);
};

const inorder = (node) => {
  if (node === '.') return;
  inorder(tree[node][0]);
  answer += node
  inorder(tree[node][1]);
};

const postorder = (node) => {
  if (node === '.') return;
  postorder(tree[node][0]);
  postorder(tree[node][1]);
  answer += node
};

const N = +input.shift();

const tree = {}
for (let i = 0; i < N; i++) {
  let [root, left, right] = input[i].split(" ");
  tree[root] = [left, right]
}

let answer = ''
preorder('A')
console.log(answer)
answer = ''
inorder('A')
console.log(answer)
answer = ''
postorder('A')
console.log(answer)
