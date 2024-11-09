class BTree {
  // 노드 번호, x 좌표, 왼쪽 자식 노드, 오른쪽 자식 노드
  constructor(idx, x_pos) {
    this.idx = idx;
    this.x_pos = x_pos;
    this.left = null;
    this.right = null;
  }

  insert(idx, x_pos) {
    this.x_pos >= x_pos ? this.toLeft(idx, x_pos) : this.toRight(idx, x_pos);
  }

  toLeft(idx, x_pos) {
    // null 이면 삽입, 아니면 insert 재호출
    this.left
      ? this.left.insert(idx, x_pos)
      : (this.left = new BTree(idx, x_pos));
  }

  toRight(idx, x_pos) {
    // null 이면 삽입, 아니면 insert 재호출
    this.right
      ? this.right.insert(idx, x_pos)
      : (this.right = new BTree(idx, x_pos));
  }
}

// 전위 순회
function preorder(BTree, arr) {
  if (!!BTree) {
    arr.push(BTree.idx);
    preorder(BTree.left, arr);
    preorder(BTree.right, arr);
  }
}

// 후위 순회
function postorder(BTree, arr) {
  if (!!BTree) {
    postorder(BTree.left, arr);
    postorder(BTree.right, arr);
    arr.push(BTree.idx);
  }
}

function solution(nodeinfo) {
  let nodes = nodeinfo
    .map((node, idx) => [idx + 1, node[0], node[1]])
    .sort((a, b) => b[2] - a[2]);

  let bTree = new BTree(nodes[0][0], nodes[0][1]);
  for (let i = 1; i < nodes.length; i++) {
    bTree.insert(nodes[i][0], nodes[i][1]);
  }

  let pre = [];
  let post = [];
  preorder(bTree, pre);
  postorder(bTree, post);

  return [pre, post];
}

console.log(
  solution([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ])
);
