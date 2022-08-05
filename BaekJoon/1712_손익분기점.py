A, B, C = map(int, input().split())

if(B > C):
    howmany = -1
else:
    cost = A
    profit = 0
    howmany = 1

    while(profit < cost):
        cost += B
        profit += C

        howmany += 1

print(howmany) 