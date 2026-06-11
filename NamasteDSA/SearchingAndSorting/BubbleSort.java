public class BubbleSort {
    public static void bubbleSort (int[] array) {
        int n = array.length;

        for (int i = 0; i < n - 1; i++) {
            boolean isSwapped = false;
            
            for (int j = 0; j < n - 1 - i; j++) {
                if(array[j] > array[j + 1]) {
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }

                isSwapped = true;
            }

            if(isSwapped != true) {
                break;
            }
        }

        for(int i = 0; i < n; i++) {
            System.out.print(array[i] + "\t");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] array1 = {3, 1, 6, 84, 7, 34, 5, 2};
        int[] array2 = {5, 4, 9, 15, 7, 1, 0};

        bubbleSort(array1);
        bubbleSort(array2);
    }
}