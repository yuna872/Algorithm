word = input()

alphabets = ['c=','c-','dz=','d-','lj','nj','s=','z=']

for alphabet in alphabets:
    word = word.replace(alphabet,"@")

print(len(word))