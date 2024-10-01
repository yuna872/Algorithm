import sys
input = sys.stdin.readline

import heapq

N = int(input())

TIME = []
for _ in range(N):
    TIME.append(list(map(int, input().split())))

TIME.sort()

ROOM = []
heapq.heappush(ROOM, TIME[0][1])
for i in range(1, N):
    # 회의실의 마지막 시간보다 다음 회의 시작 시간이 빠르면
    if TIME[i][0] < ROOM[0]:
        # 새로운 회의실 만들기
        heapq.heappush(ROOM, TIME[i][1])
    # 회의실 사용이 가능하면
    else:
        heapq.heappop(ROOM)
        heapq.heappush(ROOM, TIME[i][1])

print(len(ROOM))


