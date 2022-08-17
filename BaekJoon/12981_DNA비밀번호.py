import sys
input = sys.stdin.readline

S, P = map(int, input().split())

string = input()

nums = list(map(int,input().split()))

result = 0

for i in range(S-P+1):
    c_dict = {'A': nums[0], 'C': nums[1], 'G': nums[2], 'T': nums[3]}
    for s in string[i:i+P]:
        c_dict[s] -= 1

    if list(c_dict.values()) == [0, 0, 0, 0]:
        result += 1

print(result)



