console.clear();
function findMinimumNumber(num) {
  let min = num[0]; 

  for (let i = 0; i < num.length; i++) {
    if (num[i] < min) {
      min = num[i]; 
    }
  }

  return min; 
}

const result = findMinimumNumber([1, 8, 7 ,2 ,5]);
console.log(result);
