public class MergeSortedArrays {
    public static void mergeSortedArrays(int[] array1, int m, int[] array2, int n) {
        int pos1 = m - 1;
        int pos2 = n - 1;

        for (int i = m + n - 1; i >= 0; i--) {
            if (pos2 < 0) {
                break;
            }

            if (pos1 >= 0 && array1[pos1] > array2[pos2]) {
                array1[i] = array1[pos1];
                pos1--;
            } else {
                array1[i] = array2[pos2];
                pos2--;
            }
        }

        for (int i = 0; i < array1.length; i++) {
            System.out.println(array1[i]);
        }
    }

    public static void main(String[] args) {
        int[] array1 = { 1, 2, 3, 0, 0, 0 };
        int[] array2 = { 2, 5, 6 };
        mergeSortedArrays(array1, 3, array2, 3);

        int[] array3 = { 1 };
        int[] array4 = {};
        mergeSortedArrays(array3, 1, array4, 0);

        int[] array5 = { 0 };
        int[] array6 = { 1 };
        mergeSortedArrays(array5, 0, array6, 1);

        int[] array7 = { 1, 2, 0, 0, 0 };
        int[] array8 = { 2, 5, 6 };
        mergeSortedArrays(array7, 2, array8, 3);
    }
}