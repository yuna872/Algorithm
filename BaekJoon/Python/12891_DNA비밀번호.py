import sys
input = sys.stdin.readline

S, P = map(int, input().split())

string = input()

nums = list(map(int, input().split()))

c_dict = {'A': 0, 'C': 0, 'G': 0, 'T': 0}
cnt = 0

for st in range(S-P+1):
    # 초기 윈도우 값 설정
    if st == 0:
        for s in string[:P]:
            c_dict[s] += 1
    else:
        c_dict[string[st-1]] -= 1
        c_dict[string[st+P-1]] += 1

    if c_dict['A'] >= nums[0] and c_dict['C'] >= nums[1] and c_dict['G'] >= nums[2] and c_dict['T'] >= nums[3]:
        cnt += 1

print(cnt)
