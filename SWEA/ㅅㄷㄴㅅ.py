# # 반복구조
# def binarySearch(S, key):
#     low = 0
#     high = len(S)-1
#
#     while low <= high:
#         mid = int(low + (high - low) / 2)
#
#         if S[mid] == key:
#             return mid
#         elif S[mid] > key:
#             high = mid - 1
#         else:
#             low = mid + 1
#
#     return -1
#
# ARR = [2, 4, 7, 9, 11, 19, 23]
#
# print(binarySearch(ARR, 4))
# print(binarySearch(ARR, 17))

# 재귀
def binarySearch(A, low, high, key):
    if low > high:
        print(-1)
        return

    mid = (low + high) // 2
    if key == A[mid]:
        print(mid)
        return

    if key > A[mid]:
        binarySearch(A, mid+1, high, key)
    else:
        binarySearch(A, low, mid-1, key)


ARR = [2, 4, 7, 9, 11, 19, 23]
binarySearch(ARR, 0, len(ARR)-1, 4)
binarySearch(ARR, 0, len(ARR)-1, 17)
