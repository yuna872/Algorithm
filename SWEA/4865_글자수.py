# T = int(input())
#
# for test_case in range(1, T+1):
#     str1 = input()
#     str2 = input()
#
#     cnt_dict = {}
#
#     # 카운트 딕셔너리 초기화
#     for char in set(str1):
#         cnt_dict[char] = 0
#
#     key = list(cnt_dict.keys())
#
#     for i in range(len(str2)):
#         for j in range(len(key)):
#             if key[j] == str2[i]:
#                 cnt_dict[str2[i]] += 1
#
#     # 최대값 찾기
#     maxV = 0
#     for m in cnt_dict.values():
#         if m > maxV:
#             maxV = m
#
#     print(f'#{test_case} {maxV}')

T = int(input())

for test_case in range(1, T+1):
    str1 = input()
    str2 = input()

    cnt_dict = {}
    for s in set(str1):
        cnt_dict[s] = 0

    for i in str2:
        for j in set(str1):
            if i == j:
                cnt_dict[i] += 1

    # print(cnt_dict)
    maxV = 0
    for i in list(cnt_dict.values()):
        if i > maxV:
            maxV = i

    print(f'#{test_case} {maxV}')




