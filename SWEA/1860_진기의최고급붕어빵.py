T = int(input())

for test_case in range(1, T+1):
    N, M, K = map(int, input().split())

    guest = list(map(int, input().split()))

    bbang = [0] * 101

    # 붕어빵 만들기
    i = 1
    while i < 101:
        if i % M == 0:
            bbang[i] = bbang[i-1] + K
        else:
            bbang[i] = bbang[i - 1]

    print(bbang)







