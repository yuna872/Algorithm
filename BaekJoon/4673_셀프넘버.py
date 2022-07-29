num_lst = set(range(1,10001))

for num in range(10001):
    sumV = num

    while(num > 0):
        sumV += num%10

        num = num //10

    if(sumV in num_lst):
        num_lst.remove(sumV)

for num in num_lst:
    print(num)


    
