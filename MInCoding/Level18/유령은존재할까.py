# 브루트포스 사용하기
pattern = 'GHOST'

str = list(input())

n = len(str)
m = len(pattern)

i = 0
j = 0
while j < m and i < n:
    if str[i] == pattern[j]:
        i += 1
        j += 1
    else:
        i = i - j + 1
        j = 0
if j == m:
    print("존재")
else:
    print('존재하지 않음')

