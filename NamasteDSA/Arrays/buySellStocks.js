function buySellStocks(array) {
  let min = array[0];
  let maxProfit = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] - min > maxProfit) {
      maxProfit = array[i] - min;
    }

    if (array[i] < min) {
      min = array[i];
    }
  }

  return maxProfit;
}

console.log(buySellStocks([7, 1, 5, 3, 6, 4]));
console.log(buySellStocks([7, 6, 4, 3, 1]));
console.log(buySellStocks([1, 2]));
console.log(buySellStocks([1]));
console.log(buySellStocks([2, 4, 1]));
