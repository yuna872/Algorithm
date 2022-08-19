T = int(input())

for test_case in range(1, T+1):
    N = int(input())
    arr = [0] * 12

    d = 2
    i = 2
    while N > 1:
        if N % d != 0:
            d += 1
            i += 1
        else:
            N = N // d
            arr[i] += 1

    print(f'#{test_case} {arr[2]} {arr[3]} {arr[5]} {arr[7]} {arr[11]}')




