public class BinarySearch {
    public static int binarySearch(int[] array, int target) {
        int start = 0;
        int end = array.length - 1;

        while(start <= end) {
            int mid = (start + end) / 2;

            if (array[mid] == target) {
                return mid;
            } else if (array[mid] > target) {
                end = mid - 1;
            } else if (array[mid] < target) {
                start = mid + 1;
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        int[] array = {1, 3, 6, 7, 9, 15};

        System.out.println(binarySearch(array, 9));
    }
}