function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  }

  return n1 + n2;
}

let num1: number;
num1 = 5;
const num2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';

add(num1, num2, printResult, resultPhrase);
