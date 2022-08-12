# import sys
# sys.stdin = open('input.txt', 'r')

T = int(input())

for test_case in range(1, T+1):
    case_num, N = input().split()
    N = int(N)

    arr = list(input().split())

    cnt_dict = {"ZRO": 0, "ONE": 0, "TWO": 0, "THR": 0, "FOR": 0, "FIV": 0, "SIX": 0, "SVN": 0, "EGT": 0, "NIN": 0}

    # 카운트 갯수 저장하기
    for i in range(N):
        cnt_dict[arr[i]] += 1

    # value만 뽑아서 누적합 계산
    cnt_dict_K = list(cnt_dict.keys())
    cnt_dict_V = list(cnt_dict.values())

    for i in range(1, len(cnt_dict_V)):
        cnt_dict_V[i] += cnt_dict_V[i-1]

    print(case_num)

    for i in range(10):
        for j in range(cnt_dict_V[i]):
            print(cnt_dict_K[i], end=" ")
    print()









