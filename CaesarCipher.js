function caesarCipher(s, k) {
  //initialize variables

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArr = Array.from(alphabet);
  let cipherArr = Array.from(s);
  let results = [];
  let alphabetMap = new Map();

  for (let i = 0; i < alphabetArr.length; i++) {
    alphabetMap.set(alphabetArr[i], i);
  }

  k = k % 26;

  for (let i = 0; i < cipherArr.length; i++) {
    let letter = cipherArr[i];
    let isUpperCase = letter === letter.toUpperCase();

    letter = letter.toLowerCase();
    if (alphabetMap.has(letter)) {
      // Get current index of the letter in the alphabet
      let currentIndex = alphabetMap.get(letter);

      let newIndex = (currentIndex + k) % 26;

      let newLetter = alphabetArr[newIndex];

      if (isUpperCase) {
        newLetter = newLetter.toUpperCase();
      }
      results.push(newLetter);
    } else {
      results.push(letter);
    }
  }

  return results.join("");
}

const s = "Always-Look-on-the-Bright-Side-of-Life";
const k = 3;

console.log(caesarCipher(s, k));
