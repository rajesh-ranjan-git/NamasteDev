public class RemoveDuplicates {
    public static int removeDuplicates(int[] array) {
        int numberOfUniqueElements = 0;

        for (int index = 0; index < array.length; index++) {
            if (array[index] > array[numberOfUniqueElements]) {
                numberOfUniqueElements++;
                array[numberOfUniqueElements] = array[index];
            }
        }

        return numberOfUniqueElements + 1;
    }

    public static void main(String[] args) {
        int[] arr = { 0, 0, 1, 2, 2, 3, 3, 4, 5, 5, 6, 7, 9, 9 };

        System.out.println(removeDuplicates(arr));
    }
}