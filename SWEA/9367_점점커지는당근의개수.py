# T = int(input())
#
# for test_case in range(1, T+1):
#     N = int(input())
#
#     carrots = list(map(int, input().split()))
#
#     maxV = 0
#     cnt = 1
#     for i in range(len(carrots)-1):
#         if carrots[i]+1 == carrots[i+1]:
#             cnt += 1
#         else:
#             cnt = 1
#
#         if cnt > maxV:
#             maxV = cnt
#
#     print(f'#{test_case} {maxV}')

T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    arr = list(map(int, input().split()))

    cnt = 1
    maxV = 0
    for i in range(1, N):
        if arr[i] == arr[i-1]+1:
            cnt += 1
        else:
            cnt = 1

        if cnt > maxV:
            maxV = cnt

    print(f'#{test_case} {maxV}')

