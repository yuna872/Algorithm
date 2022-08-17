arr = list(input())

DAT = [0] * 90

for i in range(len(arr)):
    DAT[ord(arr[i])] += 1

for i in range(90):
    if DAT[i] > 0:
        print(chr(i), end="")