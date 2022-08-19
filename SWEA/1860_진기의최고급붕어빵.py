T = int(input())

for test_case in range(1, T+1):
    N, M, K = map(int, input().split())

    guest = sorted(list(map(int, input().split())))

    result = 'Possible'
    for i in range(len(guest)):
        if guest[i] // M * K >= i + 1:
            continue
        else:
            result = 'Impossible'
            break

    print(f'#{test_case} {result}')