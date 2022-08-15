# #
# char = input()

def INPUT():
    char = input()
    arr = [char * 4 for _ in range(4)]
    return arr

def output():
    for i in range(4):
        for j in range(4):
            print(arr[i][j], end='')
        print()

arr = INPUT()
output()

for i in range(4):
    arr[i] = input()