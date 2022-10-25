from copy import deepcopy
from collections import deque

N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]
# 동, 남, 북, 서
D = [(), (0, 1), (1, 0), (-1, 0), (0, -1)]
# 카메라 타입에 따라서 각각 회전할 수 있는 방향 계산해 놓기
mode = [
    [],
    [[1], [2], [3], [4]],
    [(1, 4), (2, 3)],
    [(1, 3), (1, 2), (2, 4), (3, 4)],
    [(1, 2, 3), (1, 2, 4), (2, 3, 4), (1, 3, 4)],
    [(1, 2, 3, 4)]
]
# 감시하는 함수
def look(arr, k):
    global minV

    # 모든 카메라에 대한 경우의수를 확인해 보았다면
    if k == len(cctvs):
        cnt = 0
        # 사각지대 영역 개수 세기
        for i in range(N):
            for j in range(M):
                if arr[i][j] == 0:
                    cnt += 1
        # 최소값 갱신
        if cnt < minV:
            minV = cnt
        return

    # k번째 카메라 감시하기
    curi, curj = cctvs[k]
    # 카메라의 타입 가져오기
    type = arr[curi][curj]


    for direct in mode[type]:
        # 감시한 흔적은 tmp_arr에 저장하기 (깊은복사)
        tmp_arr = deepcopy(arr)
        # 카메라 방향 조정하고 탐색 시작
        for d in direct:
            dq = deque()
            dq.append((curi, curj))

            while dq:
                i, j = dq.popleft()

                ni, nj = i + D[d][0], j + D[d][1]
                # 벽에 부딪히지 않으면서
                if 0 <= ni < N and 0 <= nj < M:
                    # 감시할 수 있으면 # 로 변경해주기
                    if tmp_arr[ni][nj] == 0:
                        tmp_arr[ni][nj] = '#'
                        dq.append((ni, nj))
                    # 벽을 만나면 멈추기
                    elif tmp_arr[ni][nj] == 6:
                        break
                    # 다른 카메라가 있을 경우에는 통과
                    else:
                        dq.append((ni, nj))
                # 범위 안에 들어와 있지 않은 경우에도 멈추기
                else:
                    break
        # 다음 카메라로 감시하러 가기
        look(tmp_arr, k+1)


# cctv가 설치된 곳 저장해놓기
cctvs = []
for i in range(N):
    for j in range(M):
        if 0 < arr[i][j] < 6:
            cctvs.append((i, j))

minV = 1e9
# 감시 시작
look(arr, 0)
print(minV)



