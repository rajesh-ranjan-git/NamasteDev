function lengthOfLastWord(s) {
  let n = s.length - 1;
  let count = 0;

  while (n >= 0) {
    if (s[n] !== " ") {
      count++;
    } else if (count > 0) {
      break;
    }

    n--;
  }

  return count;
}

console.log(lengthOfLastWord("Hello World"));

function findWordsContaining(words, x) {
  let arrayOfIndices = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        arrayOfIndices.push(i);
        break;
      }
    }
  }

  return arrayOfIndices;
}

console.log(findWordsContaining(["leet", "code"], "e"));

function numJewelsInStones(jewels, stones) {
  let counter = 0;

  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (jewels[j] === stones[i]) {
        counter++;
        break;
      }
    }
  }

  return counter;
}

function numJewelsInStonesUsingSet(jewels, stones) {
  let counter = 0;

  let hash = new Set();

  for (let i = 0; i < jewels.length; i++) {
    hash.add(jewels[i]);
  }

  for (let i = 0; i < stones.length; i++) {
    if (hash.has(stones[i])) {
      counter++;
    }
  }

  return counter;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStonesUsingSet("aA", "aAAbbbb"));

function maxFreqVowelsAndConsonant(s) {
  let vowels = "aeiou";
  let vowelsHash = {};
  let consonantsHash = {};

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      if (!vowelsHash[s[i]]) {
        vowelsHash[s[i]] = 1;
      } else {
        vowelsHash[s[i]]++;
      }
    } else {
      if (!consonantsHash[s[i]]) {
        consonantsHash[s[i]] = 1;
      } else {
        consonantsHash[s[i]]++;
      }
    }
  }

  let maxVowels = Object.values(vowelsHash).length
    ? Math.max(...Object.values(vowelsHash))
    : 0;
  let maxConsonants = Object.values(consonantsHash).length
    ? Math.max(...Object.values(consonantsHash))
    : 0;

  return maxVowels + maxConsonants;
}

console.log(maxFreqVowelsAndConsonant("successes"));
