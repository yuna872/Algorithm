N = int(input())

start = int('1'+'0'*(N-1))
end = int('1'+'0'*N)
count = 0

for num in range(start,end):
    split_lst = list(map(int,str(num)))

    if (N == 1):
        count = 9
    else:
        for idx in range(len(split_lst)-1):
            if(split_lst[idx]+1 == split_lst[idx+1] or split_lst[idx]-1 == split_lst[idx+1]):
                if(idx == len(split_lst)-2):
                    count += 1

print(count%1000000000)


