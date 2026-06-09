public class MissingNumber {
    public static int missingNumber(int[] array) {
        int total = array.length * (array.length + 1) / 2;
        int sum = 0;

        for (int index = 0; index < array.length; index++) {
            sum = sum + array[index];
        }

        return total - sum;
    }

    public static void main(String[] args) {
        int[] array1 = { 3, 0, 1 };
        int[] array2 = { 0, 1 };
        int[] array3 = { 9, 6, 4, 2, 3, 5, 7, 0, 1 };

        System.out.println(missingNumber(array1));
        System.out.println(missingNumber(array2));
        System.out.println(missingNumber(array3));
    }
}
