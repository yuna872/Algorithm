numbers = list(map(int, input().split()))
result = False

for i in range(5):
    for j in range(i+1, 6):
        if numbers[i] == numbers[j]:
            result = True
if result :
    print('도플갱어 발견')
else:
    print('미발견')