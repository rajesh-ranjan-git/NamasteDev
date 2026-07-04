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

function balancedStringSplit(s) {
  let balancedCounter = (rlCounter = 0);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      rlCounter++;
    } else {
      rlCounter--;
    }

    if (rlCounter === 0) {
      balancedCounter++;
    }
  }

  return balancedCounter;
}

console.log(balancedStringSplit("RLRRLLRLRL"));

function reverseStr(s, k) {
  s = s.split("");

  for (let i = 0; i < s.length; i = i + 2 * k) {
    let start = i;
    let end = i + k - 1;

    while (start < end) {
      let temp = s[start];
      s[start] = s[end];
      s[end] = temp;

      start++;
      end--;
    }
  }

  return s.join("");
}

console.log(reverseStr("abcdefg", 2));

function isPalindrome(s) {
  s = s.toLowerCase();

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (!s[start].match(/[a-z0-9]/)) {
      start++;
    } else if (!s[end].match(/[a-z0-9]/)) {
      end--;
    } else if (s[start] !== s[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }

  return true;
}

console.log(reverseStr("A man, a plan, a canal: Panama"));

function largestOddNumber(num) {
  let n = num.length - 1;

  while (n >= 0) {
    if (Number(num[n]) % 2 !== 0) {
      return num.substring(0, n + 1);
    }

    n--;
  }

  return "";
}

console.log(reverseStr("52"));

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const hash = {};

  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!hash[t[i]]) {
      return false;
    } else {
      hash[t[i]]--;
    }
  }

  let keys = Object.keys(hash);
  for (let i = 0; i < keys.length; i++) {
    if (hash[keys[i]] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(reverseStr("aacc", "ccac"));
