public class InsertionSort {
    public static void insertionSort(int[] array) {
        for(int i = 1; i < array.length; i++) {
            int current = array[i];
            int previous = i - 1;

            while(previous >= 0 && array[previous] > current) {
                array[previous + 1] = array[previous];
                previous--;
            }

            array[previous + 1] = current;
        }

        for(int i = 0; i < array.length; i++) {
            System.out.print(array[i] + "\t");
        }
        System.out.println();
    }

    public static void main(String[] args) {        
        int[] array1 = {3, 1, 6, 84, 7, 34, 5, 2};
        int[] array2 = {5, 4, 9, 15, 7, 1, 0};

        insertionSort(array1);
        insertionSort(array2);
    }
}