console.clear();

function reverseTitleCase(str) {
    // convert string to array using split()
    const words = str.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
    // last letter of capital
      words[i] = word.slice(0, -1) + word.slice(-1).toUpperCase();
    }
    const result = words.join(' ')
    return result;
}

const finalStr = reverseTitleCase("hello there how are you")
console.log(finalStr);