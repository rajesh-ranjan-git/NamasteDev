public class LinearSearch {
    public static int linearSearch(int[] array, int target) {
        for(int index = 0; index < array.length; index++) {
            if(array[index] == target) {
                return index;
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        int[] array = {3, 1, 6, 84, 7, 34, 5};

        System.out.println(linearSearch(array, 6));
    }
}