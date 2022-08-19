T = int(input())

for test_case in range(1, T+1):
    N, Q = map(int, input().split())

    boxes = [0] * (N+1)

    for q in range(1, Q+1):
        L, R = map(int, input().split())

        for i in range(L, R+1):
            boxes[i] = q

    print(f'#{test_case}', end= " ")
    for b in boxes[1:]:
        print(b, end=' ')
    print()
