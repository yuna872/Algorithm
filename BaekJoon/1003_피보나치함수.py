cnt = [
    [1, 0],
    [0, 1]
]

for i in range(2, 41):
    zero = cnt[i-1][0]+cnt[i-2][0]
    one = cnt[i-1][1]+cnt[i-2][1]
    cnt.append([zero, one])

T = int(input())

for test_case in range(1, T+1):
    cnt_zero = 0
    cnt_one = 0

    N = int(input())

    print(cnt[N][0], cnt[N][1])
