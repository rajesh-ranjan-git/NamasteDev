public class MoveZeroes {
    public static int[] moveZeroes(int[] array) {
        int pos = 0;

        for (int index = 0; index < array.length; index++) {
            if (array[index] != 0) {
                array[pos] = array[index];
                pos++;
            }
        }

        for (int index = pos; index < array.length; index++) {
            array[index] = 0;
        }

        return array;
    }

    public static void main(String[] args) {
        int[] array = { 0, 1, 0, 3, 12 };
        int[] result = moveZeroes(array);

        for (int index = 0; index < result.length; index++) {
            System.out.println(result[index]);
        }
    }
}