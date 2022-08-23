# T = int(input())
#
# for test_case in range(1, T+1):
#     pattern = input()
#     str = input()
#     n = len(pattern)
#     m = len(str)
#
#     i = 0
#     j = 0
#     while i < m and j < n:
#         if pattern[j] == str[i]:
#             i += 1
#             j += 1
#         else:
#             i = i - j + 1
#             j = 0
#
#     if j == n:
#         print(f'#{test_case} 1')
#     else:
#         print(f'#{test_case} 0')
def findStr():
    n = len(pattern)
    m = len(string)

    i = 0
    j = 0
    while i < m and j < n:
        if pattern[j] == string[i]:
            i += 1
            j += 1
        else:
            i = i - j + 1
            j = 0
    if j == n:
        return 1
    return 0

T = int(input())

for test_case in range(1, T+1):
    pattern = input()
    string = input()

    print(f'#{test_case} {findStr()}')


