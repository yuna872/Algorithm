T = int(input())

for t in range(T):
    row = int(input())
    col = int(input())

    arr = [[] for _ in range(row)]

    for i in range(row+1):
        for j in range(col+1):
            if(i == 0):
                arr[i][j] = j
            else : 
                arr[i][j] = arr[i][j-1] + arr[i-1][j]
    print(arr[row+1][col])
            
