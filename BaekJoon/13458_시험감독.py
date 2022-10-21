import math

N = int(input())
# 각 시험장에 있는 응시자 수
A = list(map(int, input().split()))
B, C = map(int, input().split())

ans = 0
for i in range(N):
    # 총감독관 배치
    A[i] -= B
    ans += 1

    if A[i] > 0:
        ans += A[i]//C

        if A[i] % C > 0:
            ans += 1

print(ans)