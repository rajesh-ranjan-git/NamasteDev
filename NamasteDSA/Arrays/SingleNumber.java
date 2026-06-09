public class SingleNumber {
    public static int singleNumber(int[] array) {
        int xor = 0;

        for (int index = 0; index < array.length; index++) {
            xor = xor ^ array[index];
        }

        return xor;
    }

    public static void main(String[] args) {
        int[] array1 = { 2, 2, 1 };
        int[] array2 = { 4, 1, 2, 1, 2 };

        System.out.println(singleNumber(array1));
        System.out.println(singleNumber(array2));
    }
}
