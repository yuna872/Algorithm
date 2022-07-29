num_lst = set(range(1,10001))

# 리스트를 만들어서 생성자를 하나씩 돌려가며 생성자로 만들어진 숫자가 있으면 리스트에서 제거
for num in range(10001):
    sumV = num

    while(num > 0):
        sumV += num%10

        num = num //10

    if(sumV in num_lst):
        num_lst.remove(sumV)

for num in num_lst:
    print(num)


    
