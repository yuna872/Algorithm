def solution(array, commands):
    answer = []

    for command in commands:
        st = command[0]-1
        ed = command[1]
        k = command[2]

        tmp = array[st:ed]
        n = len(tmp)

        # 선택 정렬
        for i in range(n-1):
            minidx = i
            for j in range(i+1, n):
                if tmp[minidx] > tmp[j]:
                    minidx = j
            tmp[minidx], tmp[i] = tmp[i], tmp[minidx]

        answer.append(tmp[k - 1])
    return answer

arr = [1,5,2,6,3,7,4]
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
print(solution(arr, commands))