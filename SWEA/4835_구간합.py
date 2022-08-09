T = int(input())

for test_case in range(1, T+1):
    N, M = map(int, input().split())

    arr = list(map(int, input().split()))

    maxV = 0
    minV = 10000*N

    for start in range(N-M+1):
        arr_sum = 0
        for i in range(M):
            arr_sum += arr[start+i]
        
        if arr_sum > maxV:
            maxV = arr_sum
        if arr_sum < minV:
            minV = arr_sum
    
    print(f'#{test_case} {maxV - minV}')
