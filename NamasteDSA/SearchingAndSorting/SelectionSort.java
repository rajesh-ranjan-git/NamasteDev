public class SelectionSort {
    public static void selectionSort(int[] array) {
        int n = array.length;

        for(int i = 0; i < n - 1; i++) {
            int min = i;

            for(int j = i; j < n; j++) {
                if(array[min] > array[j]) {
                    min = j;
                }
            }

            int temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }

        for(int i = 0; i < array.length; i++) {
            System.out.print(array[i] + "\t");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] array1 = {3, 1, 6, 84, 7, 34, 5, 2};
        int[] array2 = {5, 4, 9, 15, 7, 1, 0};

        selectionSort(array1);
        selectionSort(array2);
    }
}