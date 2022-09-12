# import sys
# sys.stdin = open('5174_input.txt', 'r')

T = int(input())

# 중위순회 함수
def inorder(N):
    global cnt

    if N == 0:
        return
    # 노드를 방문하면 cnt++
    cnt += 1

    # 자식노드도 차례로 방문
    inorder(left[N])
    inorder(right[N])


for test_case in range(1, T+1):
    E, N = map(int, input().split())
    inputV = list(map(int, input().split()))

    cnt = 0
    left = [0] * (E+2)
    right = [0] * (E+2)

    for i in range(0, len(inputV), 2):
        # 왼쪽 자식 노드에 값이 없으면 삽입
        if left[inputV[i]] == 0:
            left[inputV[i]] = inputV[i + 1]
        # 아니면 오른쪽에 삽입
        else:
            right[inputV[i]] = inputV[i + 1]

    inorder(N)

    print(f'#{test_case} {cnt}')



