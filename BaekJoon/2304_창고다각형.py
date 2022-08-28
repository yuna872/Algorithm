N = int(input())
arr = [0] * 1001
point = []
ans = 0
maxH, maxL = 0, 0

for n in range(N):
    L, H = map(int, input().split())

    if H > maxH:
        maxH = H
        maxL = L

    point.append(L)

    arr[L] = H

point.sort()

# 기둥의 시작, 끝 포인트
st = point[0]
en = point[-1]

sumH = 0
tmp = 0
# 최고점을 만나기 전까지의 높이의 합
for i in range(st, maxL+1):
    if arr[i] > tmp:
        tmp = arr[i]
        sumH += tmp
    else:
        sumH += tmp

tmp = 0
# 최고점을 만난 후 뒤쪽 배열에서의 최댓값
for i in range(en, maxL, -1):
    if arr[i] > tmp:
        tmp = arr[i]
        sumH += tmp
    else:
        sumH += tmp

print(sumH)






