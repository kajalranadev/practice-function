console.clear();

const average = (...number) => {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return sum / number.length;
}

console.log(average(10, 20, 30, 40)); 
