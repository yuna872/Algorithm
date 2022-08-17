vect = 'MINCODING'

n = int(input())
str = list(input().split())

result = False

for s in str:
    if s in vect:
        print('o', end='')
    else:
        print('x', end='')
