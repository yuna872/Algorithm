# 최대힙

def enq(n):
    global last
    last += 1  # 마지막 정점 추가
    heap[last] = n   # 마지막 정점에 key 추가

    c = last  # 자식노드
    p = c//2  # 부모노드
    # 부모가 있고, 부모 < 자식 인 경우 자리교환
    while p and heap[p] < heap[c]:
        heap[p], heap[c] = heap[c], heap[p]
        # 새로운 부모, 자식 노드
        c = p
        p = c//2


heap = [0] * 100
# 마지막 리프노드의 인덱스
last = 0

enq(2)
enq(5)
print(heap)