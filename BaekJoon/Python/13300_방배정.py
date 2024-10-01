# import sys
# sys.stdin = open('13300_input.txt')

girls = [[i, 0] for i in range(7)]
boys = [[i, 0] for i in range(7)]

N, K = map(int, input().split())

for n in range(N):
    S, Y = map(int, input().split())

    # 여학생인 경우
    if S == 0:
        girls[Y][1] += 1
    else:
        boys[Y][1] += 1

room = 0
for i in range(1, 7):

    while girls[i][1] > 0:
        girls[i][1] = girls[i][1] - K
        room += 1

    while boys[i][1] > 0:
        boys[i][1] = boys[i][1] - K
        room += 1

print(room)


