const findSecondLargestNumber = (arr) => {
  let largestNumber;
  let secondLargestNumber;

  if (arr[0] > arr[1]) {
    largestNumber = arr[0];
    secondLargestNumber = arr[1];
  } else {
    largestNumber = arr[1];
    secondLargestNumber = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = arr[i];
    } else if (arr[i] > secondLargestNumber) {
      secondLargestNumber = arr[i];
    }
  }

  return secondLargestNumber;
};

const arr = [3, -56, 25, -7, 34, 7, 9, -3, 5, -8, 3, 5];

console.log(`${findSecondLargestNumber(arr)} is the second largest number.`);
