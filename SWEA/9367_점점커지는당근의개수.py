T = int(input())

for test_case in range(1, T+1):
    N = int(input())

    carrots = list(map(int, input().split()))

    maxV = 0
    cnt = 1
    for i in range(len(carrots)-1):
        if carrots[i]+1 == carrots[i+1]:
            cnt += 1
        else:
            cnt = 1

        if cnt > maxV:
            maxV = cnt

    print(f'#{test_case} {maxV}')
