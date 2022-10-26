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



