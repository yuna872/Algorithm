T = int(input())

num_set = set(list(range(1,10)))

for t in range(T):
    arr = []
    # 결과의 default는 1로 두고 조건에 맞지 않으면 0으로 갱신
    result = 1

    # 9 x 9 배열 입력 받기
    for i in range(9):
        arr.append(list(map(int,input().split())))
    
    # 가로 검증
    for i in range(9):
        # print(set(arr[i]))
        if(set(arr[i]) != num_set):
            result = 0
            break

    # 세로 검증
    for j in range(9):
        sero_set = set()
        for i in range(9):
            sero_set.add(arr[i][j])
        if(sero_set != num_set):
            result  = 0
            break

    # 작은 격자 검증
    for n in range(0,9,3):
        for m in range(0,9,3):
            small_set = set()
            for i in range(3):
                for j in range(3):
                    small_set.add(arr[i+n][j+m])
            if(small_set != num_set):
                result = 0
                break
    
    print(f'#{t+1} {result}')
            

    

    
