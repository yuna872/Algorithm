# 찾은 경우 일차원 배열의 index를 return하고 못찾으면 -1을 return
def find(key):
    pos = 1
    while TREE[pos]:
        if key == TREE[pos]:
            return pos
        elif key > TREE[pos]:
            pos = pos*2 + 1
        else:
            pos = pos*2
    return -1

def delete(value):
    # 자식노드가 없는 경우
    # 자식노드가 하나인 경우
    # 자식노드가 두개인 경우

def insert(v):
    pos = 1
    while TREE[pos]:
        if v < TREE[pos]:
            pos = pos*2
        else:
            pos = pos*2 + 1

    TREE[pos] = v

def inorder(root):
    # 루트에 값이 있으면
    if TREE[root]:
        inorder(root*2)

        print(TREE[root])

        inorder(root*2 + 1)

lst = [9, 4, 12, 13, 17, 15, 3, 6]
TREE = [0]*100
for d in lst:
    insert(d)
print(TREE)

inorder(1)
print(TREE)
print(find(9))
print(find(6))
print(find(17))
print(find(18))