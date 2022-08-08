N = int(input())

arr = list(map(int,input().split()))
arr_sorted = sorted(list(set(arr)))

for n in arr:
    print(arr_sorted.index(n), end= " ")





