public class MaxConsecutiveOnes {
    public static int maxConsecutiveOnes(int[] array) {
        int counter = 0;
        int maxCounter = 0;

        for (int index = 0; index < array.length; index++) {
            if (array[index] == 1) {
                counter++;
            } else {
                counter = 0;
            }

            maxCounter = counter > maxCounter ? counter : maxCounter;
        }

        return maxCounter;
    }

    public static void main(String[] args) {
        int[] array1 = { 1, 1, 0, 1, 1, 1 };
        int[] array2 = { 1, 0, 1, 1, 0, 1 };

        System.out.println(maxConsecutiveOnes(array1));
        System.out.println(maxConsecutiveOnes(array2));
    }
}
