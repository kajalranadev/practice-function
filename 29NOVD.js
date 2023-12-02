function count(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counter++;
    } 
  }
  return counter > 0 ? counter : false;
}

const first = count("Proooduct", "o");
const second = count("Tarzen", "y");

console.log(first);
console.log(second);
