import sys
sys.stdin = open('2628_input.txt', 'r')

W, H = map(int, input().split())
garo = []
sero = []

N = int(input())

for n in range(N):
    D, i = map(int, input().split())

    if D == 0:
        garo.append(i)
    else:
        sero.append(i)

garo = [0] + sorted(garo) + [H]
sero = [0] + sorted(sero) + [W]

maxG = 0
for i in range(1, len(garo)):
    if maxG < garo[i]-garo[i-1]:
        maxG = garo[i]-garo[i-1]
maxS = 0
for i in range(1, len(sero)):
    if maxS < sero[i]-sero[i-1]:
        maxS = sero[i]-sero[i-1]

print(maxG * maxS)


