```javascript
const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim()

console.log(input)
```

본문에 적힌 process.platform는 이 파일이 어떤 운영체제에서 실행되느냐에 대한 것인데 삼항 연산자를 사용하여 process.platform==="linux"가 참(true)이면 /dev/stdin을 실행하고 거짓(false)이면 ./input.txt를 실행한다. 백준 사이트에서 제출하면 linux(리눅스) 운영체제 상에서 실행되기 때문이다. VSCode 상에서 문제를 푸는 파일과 같은 폴더 안에 input.txt 파일에 문제의 입력값을 복사해 넣고 저장하면 문제를 푸는 환경(운영체제)이 window 또는 macOS이기 때문에 ./input.txt가 실행되는 것이다. 참고로 ./은 같은 폴더 안의 경로를 선택할 경우 사용한다.

출처: https://minjo0n.tistory.com/2 [민이랑준:티스토리]