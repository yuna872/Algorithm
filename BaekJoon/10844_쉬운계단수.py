N = int(input())

start = int('1'+'0'*(N-1))
end = int('1'+'0'*N)

for num in range(start,end):
    split_lst = list(map(int,str(num).split()))
    count = 0

    if(N == 1):
        print(9)
        break
    else : 
        for idx in range(N-1):
            if(split_lst[idx] != split_lst[idx+1]+1 or split_lst[idx]+1 != split_lst[idx+1]):
                break

            if(idx == N-2):
                count += 1
            
        print(count)
