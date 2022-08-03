import math

A,B,C = map(int,input().split())
howmany = 1

if(C <= B):
    howmany = -1
else : 
    howmany = math.ceil(A//(C-B)) + 1

print(howmany)