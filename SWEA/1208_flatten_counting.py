for test_case in range(1, 11):
    dump = int(input())
    arr = list(map(int, input().split()))

    cnt_arr = [0]*101

    # 각 숫자의 개수를 리스트에 저장
    for n in arr:
        cnt_arr[n] += 1

    # 뒤에서(최고점)부터 차례로 내려오면서 평탄화
    high = 100
    low = 1
    while dump > 0:
        if cnt_arr[high] > 0:
            if cnt_arr[low] > 0:
                cnt_arr[high] -= 1
                cnt_arr[high-1] += 1
                cnt_arr[low] -= 1
                cnt_arr[low+1] += 1
                dump -= 1
            # low가 0이면 넘어가
            else:
                low += 1
        # high가 0이면 앞으로 넘어가
        else:
            high -= 1

    for i in range(100, 0, -1):
        if cnt_arr[i] != 0:
            maxV = i
            break

    for i in range(1, 101):
        if cnt_arr[i] != 0:
            minV = i
            break

    print(f'#{test_case} {maxV-minV}')



