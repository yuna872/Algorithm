import sys
sys.stdin = open('input.txt', 'r')

# # 최댓값 구하는 함수
# def getMaxidx(arr):
#     maxV = 0
#     max_idx = 0
#     for i in range(len(arr)):
#         if arr[i] > maxV:
#             maxV = arr[i]
#             max_idx = i
#     return max_idx
#
# T = int(input())
#
# for test_case in range(1, T+1):
#     N = int(input())
#
#     arr = list(map(int, input().split()))
#
#     profit = 0
#
#     # arr가 빈 리스트가 될 때 까지
#     while len(arr) != 0:
#         cnt = 0
#         max_idx = getMaxidx(arr)
#
#         for i in range(max_idx):
#             profit -= arr[i]
#             cnt += 1
#
#         profit += arr[max_idx] * cnt
#
#         if max_idx < N-1:
#             arr = arr[max_idx+1:]
#         else:
#             break
#
#     print(f'#{test_case} {profit}')
def getMaxIdx(arr):
    maxV = 0
    max_idx = 0
    for i in range(len(arr)):
        if arr[i] > maxV:
            maxV = arr[i]
            max_idx = i
    return max_idx

T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    arr = list(map(int, input().split()))

    profit = 0

    while len(arr) != 0:
        max_idx = getMaxIdx(arr)
        cnt = 0
        for i in range(max_idx):
            profit -= arr[i]
            cnt += 1

        profit += arr[max_idx] * cnt

        if max_idx + 1 < N:
            arr = arr[max_idx+1:]
        else:
            break

    print(f'#{test_case} {profit}')
























