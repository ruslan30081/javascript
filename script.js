let arr = ['2345', '4567', '2789', '1234', '2456', '7890', '4211'];

console.log(arr.filter(num => num.startsWith('2') || num.startsWith('4')));

for (let i = 1; i <= 100; i++) {
  console.log(i);
  let delimiters = '';
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      delimiters += j + ' ';
    }
  }
  console.log(`Делители этого числа: ${delimiters}`);
}