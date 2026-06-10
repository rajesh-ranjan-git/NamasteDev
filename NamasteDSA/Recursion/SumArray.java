public class SumArray {
    static int[] arr = {5, 3, 2, 0, 1};

    public static int sumArray(int n) {
        if(n == 0) return arr[n];

        return arr[n] + sumArray(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(sumArray(arr.length - 1));
    }
}