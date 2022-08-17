def count(level):
    print(level)
    if level == 0:
        return

    count(level-1)
    print(level)

steps = list(map(int,input().split()))


