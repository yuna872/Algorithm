import sys
input = sys.stdin.readline

N = int(input())

time = []
for _ in range(N):
    time.append(list(map(int, input().split())))

time.sort(key=lambda x:x[1])

ROOM = [[time[0]]]
cnt = 1
for t in time[1:]:
    check = 0
    for lecture in ROOM:
        # print(lecture[-1][1])
        # 강의실의 마지막 수업의 끝나는 시간보다 늦게시작하거나
        if lecture[-1][1] <= t[0]:
            lecture.append(t)
            check = 1
    if not check:
        ROOM.append([t])
        cnt += 1
print(cnt)


