T = int(input())

for test_case in range(1, T+1):
    N = int(input())
    aisle = [0] * 201

    for n in range(N):
        A, B = map(int, input().split())

        if A % 2 == 1:
            A += 1
        if B % 2 == 1:
            B += 1

        if A < B:
            for i in range(round(A / 2), round(B / 2) + 1):
                aisle[i] += 1
        else:
            for i in range(round(B / 2), round(A / 2) + 1):
                aisle[i] += 1

    print(f'#{test_case} {max(aisle)}')
