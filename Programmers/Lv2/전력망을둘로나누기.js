function solution(n, wires) {
    // 트리 전체 구조를 그린다.
    // 노드의 번호가 1부터 시작하므로 길이는 n+1로 세팅한다.
    let tree = new Array(n + 1).fill().map(() => []);
  
    // 연결된 노드 정보를 트리에 저장한다.
    wires.map(([from, to]) => {
      tree[from].push(to);
      tree[to].push(from);
    });
  
    // bfs: 탐색을 시작할 노드번호(root), 방문하지 않을 노드번호(exceptNode)를 인자로 받는다.
    function bfs(root, exceptNode) {
      let queue = [root];
  
      // 방문 기록을 위한 배열을 생성한다.
      let visited = new Array(n + 1).fill().map(() => false);
      visited[root] = true;
  
      // 큐가 빈 배열이 될 때까지 실행
      while (queue.length) {
        // 앞에서부터 노드 꺼내기
        let node = queue.shift();
        // 방문처리는 잊지 말자
        visited[node] = true;
        // 현재 노드에 연결 되어있는 녀석들 중 방문 가능한 놈을 찾아서 큐에 삽입할거야
        tree[node].forEach((nextNode) => {
          // 방문 예정인 노드가 제외 대상이 아니면서 방문한적이 없는 노드인 경우
          if (nextNode !== exceptNode && !visited[nextNode]) {
            // 큐에 push
            queue.push(nextNode);
          }
        });
      }
  
      // 트리의 노드 개수는 방문 처리된 노드의 개수와 같으므로 true인 친구들의 개수를 리턴한다.
      return visited.reduce((cnt, v) => cnt + (v === true), 0);
    }
  
    let min = Number.MAX_SAFE_INTEGER;
    wires.forEach((exceptWire) => {
      // exceptWire를 끊으면 from, to를 root로 가지는 트리가 2개 존재하게 된다.
      let [from, to] = exceptWire;
      // 이 두개의 트리를 bfs로 탐색하며 노드 개수의 차이를 구한다.
      let result = Math.abs(bfs(from, to) - bfs(to, from));
      // 최소값을 갱신해 나가며 진행한다.
      min = min > result ? result : min;
    });
  
    return min;
  }