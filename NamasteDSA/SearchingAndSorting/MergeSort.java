import java.util.Arrays;

public class MergeSort {
    public static int[] merge(int[] left, int[] right) {
        int i = 0;
        int j = 0;
        int k = 0;
        int[] result = new int[left.length + right.length];

        while(i < left.length && j < right.length) {
            if(left[i] <= right[j]) {
                result[k] = left[i];
                i++;
                k++;
            } else {
                result[k] = right[j];
                j++;
                k++;
            }
        }

        while(i < left.length) {
            result[k] = left[i];
            i++;
            k++;
        }
        
        while(j < right.length) {
            result[k] = right[j];
            j++;
            k++;
        }

        return result;
    }

    public static int[] mergeSort(int[] array) {
        if(array.length <= 1) return array;

        int mid = array.length / 2;

        int[] left = mergeSort(Arrays.copyOfRange(array, 0, mid));
        int[] right = mergeSort(Arrays.copyOfRange(array, mid, array.length));

        return merge(left, right);
    }

    public static void main(String[] args) {        
        int[] array1 = {3, 1, 6, 84, 7, 34, 5, 2};
        int[] array2 = {5, 4, 9, 15, 7, 1, 0};

        int[] sortedArray1 = mergeSort(array1);
        int[] sortedArray2 = mergeSort(array2);

        for(int i = 0; i < sortedArray1.length; i++) {
            System.out.print(sortedArray1[i] + "\t");
        }
        System.out.println();

        for(int i = 0; i < sortedArray2.length; i++) {
            System.out.print(sortedArray2[i] + "\t");
        }
        System.out.println();
    }
}