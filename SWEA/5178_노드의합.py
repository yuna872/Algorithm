# import sys
# sys.stdin = open('5178_input.txt', 'r')

T = int(input())

for test_case in range(1, T+1):
    N, M, L = map(int, input().split())

    tree = [0] * (N+1)

    for m in range(M):
        idx, num = map(int, input().split())
        tree[idx] = num

    for i in range(N-M, 0, -1):
        # 자식노드가 존재할 때만 더해줘
        if 2*i <= N:
            tree[i] += tree[2*i]

        if 2*i + 1 <= N:
            tree[i] += tree[2*i + 1]

    print(f'#{test_case} {tree[L]}')



