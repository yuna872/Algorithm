# T = int(input())
#
# for test_case in range(1,T+1):
#     N = int(input())
#
#     arr = list(map(int,input()))
#
#     cnt_one = 0
#     max_cnt = 0
#     for i in arr:
#         if i == 1:
#             cnt_one += 1
#         else:
#             cnt_one = 0
#         if cnt_one > max_cnt:
#             max_cnt = cnt_one
#
#     print(f'#{test_case} {max_cnt}')

T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    arr = list(map(int, input()))
    # print(arr)

    cnt = 0
    maxV = 0
    for i in arr:
        if i == 1:
            cnt += 1
        else:
            cnt = 0

        if cnt > maxV:
            maxV = cnt

    print(f'#{test_case} {maxV}')
