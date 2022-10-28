# def f(i, k):
#     global check
#
#     if i == k:
#         res = ''.join(strLst)
#         if res == res[::-1]:
#             check = 1
#             if res not in resArr:
#                 resArr.append(res)
#         return
#     else:
#         for j in range(i, k):
#             strLst[i], strLst[j] = strLst[j], strLst[i]
#             f(i+1, k)
#             strLst[i], strLst[j] = strLst[j], strLst[i]
#
# strLst = list(input())
# N = len(strLst)
# resArr = []
# check = 0
#
# f(0, N)
# resArr.sort()
# if resArr:
#     print(resArr[0])
# else:
#     print("I'm Sorry Hansoo")

word = input()
alphabet = [0 for _ in range(27)]

for w in word:
    alphabet[ord(w)-65] += 1

odd_cnt = 0
for i in range(27):
    # 해당 알파벳의 개수가 홀수 개 인 것 카운트
    if alphabet[i] % 2:
        odd_cnt += 1

# 알파벳의 개수가 홀수 인것은 0, 1개 일때만 팰린드롬 생성 가능
if odd_cnt > 1:
    print("I'm Sorry Hansoo")
# 아닌 경우에는 팰린드롬 만들기
else:
    P = ''
    center = ''
    for i in range(27):
        # 알파벳의 개수가 2개 이상이라면 P에 이어붙이기
        if alphabet[i] >= 2:
            while alphabet[i] >= 2:
                # 하나만 이어붙이기
                P += chr(i+65)
                # P를 뒤집어 뒤쪽 문자열을 만들 것이기 때문에 2개를 한번에 처리
                alphabet[i] -= 2

    for i in range(27):
        # 한개 남은 알파벳은 가장 가운데에 넣을 것임 일단 center에 저장해놓기
        if alphabet[i] == 1:
            center = chr(i+65)

    # 데칼코마니 시스템
    print(P + center + P[::-1])






