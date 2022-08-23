# T = int(input())
#
# for test_case in range(1, T+1):
#     N = int(input())
#
#     bus_stop = [0] * 1001
#
#     for n in range(N):
#         type, A, B = map(int, input().split())
#
#         if type == 1:
#             for i in range(A, B+1):
#                 bus_stop[i] += 1
#         elif type == 2:
#             for i in range(A, B+1, 2):
#                 bus_stop[i] += 1
#         else:
#             # A가 홀수 이면
#             if A % 2:
#                 for i in range(A, B+1):
#                     if i % 3 == 0 and i % 10 != 0:
#                         bus_stop[i] += 1
#             else:
#                 for i in range(A, B+1):
#                     if i % 4 == 0:
#                         bus_stop[i] += 1
#     max_cnt = 0
#     for b in bus_stop:
#         if b > max_cnt:
#             max_cnt = b
#     print(f'#{test_case} {max_cnt}')
T = int(input())

for test_case in range(1, T+1):
    bus_stop = [0] * 1001
    N = int(input())

    for n in range(N):
        type, st, en = map(int, input().split())

        if type == 1:
            for i in range(st, en+1):
                bus_stop[i] += 1

        elif type == 2:
            for i in range(st, en + 1, 2):
                bus_stop[i] += 1
        else:
            # 홀수인 경우
            if st % 2:
                for i in range(st, en+1):
                    if i % 3 == 0 and i % 10 != 0:
                        bus_stop[i] += 1
            else:
                for i in range(st, en+1):
                    if i % 4 == 0:
                        bus_stop[i] += 1

    maxV = 0
    for i in bus_stop:
        if i > maxV:
            maxV = i

    print(f'#{test_case} {maxV}')





