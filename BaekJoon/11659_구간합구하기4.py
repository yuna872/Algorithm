import sys
input = sys.stdin.readline

N, M = map(int, input().split())

# 문제에서 index 0을 1번째라고 말하고 있음
arr = [0] + list(map(int, input().split()))

# 누적합 구하기
for i in range(1, len(arr)):
    arr[i] += arr[i-1]

for m in range(M):
    start, end = map(int, input().split())
    print(arr[end]-arr[start-1])


