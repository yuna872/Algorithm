for test_case in range(1, 11):
    N = int(input())
    count = 0

    arr = list(map(int, input().split()))

    for i in range(2, N - 2):
        tmp = arr[i-2:i+3]
        maxV = 0
        for j in range(len(tmp)):
            # i와 같은 인덱스 이면 pass
            if j == 2:
                pass
            # 큰 숫자가 나오면 break
            elif arr[i] <= tmp[j]:
                break
            # 작은 숫자면 마지막인지 확인하기
            else:
                if tmp[j] > maxV:
                    maxV = tmp[j]
                if j == 4:
                    count += arr[i]-maxV

    print(f'#{test_case} {count}')