up = list(map(int,input().split()))
down = list(map(int,input().split()))
cnt = 0

for i in range(len(up)):
    if up[i] == 1 and 1 == down[i]:
        cnt += 1

print(f'{cnt}개')