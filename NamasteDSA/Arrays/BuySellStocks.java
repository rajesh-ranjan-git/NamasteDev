public class BuySellStocks {
    public static int buySellStocks(int[] array) {
        int min = array[0];
        int maxProfit = 0;

        for (int i = 0; i < array.length; i++) {
            if (array[i] - min > maxProfit) {
                maxProfit = array[i] - min;
            }

            if (min > array[i]) {
                min = array[i];
            }
        }

        return maxProfit;
    }

    public static void main(String[] args) {
        int[] array1 = { 7, 1, 5, 3, 6, 4 };
        int[] array2 = { 7, 6, 4, 3, 1 };
        int[] array3 = { 1, 2 };
        int[] array4 = { 1 };
        int[] array5 = { 2, 4, 1 };

        System.out.println(buySellStocks(array1));
        System.out.println(buySellStocks(array2));
        System.out.println(buySellStocks(array3));
        System.out.println(buySellStocks(array4));
        System.out.println(buySellStocks(array5));
    }
}
