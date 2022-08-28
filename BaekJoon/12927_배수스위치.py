lights = [0] + list(input())

N = len(lights) - 1
cnt = 0

for i in range(1, N+1):
    if lights[i] == 'Y':
        cnt += 1
        for j in range(i, N+1, i):
            if lights[j] == 'Y':
                lights[j] = 'N'
            else:
                lights[j] = 'Y'

if lights == [0] + ['N']*N:
    print(cnt)
else:
    print(-1)

