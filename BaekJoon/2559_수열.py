N, K = map(int, input().split())
temp = list(map(int, input().split()))

# 누적합 구하기
for i in range(1, N):
    temp[i] += temp[i-1]

st = 0
en = K
# 초기화를 맨 처음 윈도우의 누적합으로 설정하자
maxV = temp[K-1]
while en < N:
    if temp[en] - temp[st] > maxV:
        maxV = temp[en] - temp[st]
    st += 1
    en += 1

print(maxV)




