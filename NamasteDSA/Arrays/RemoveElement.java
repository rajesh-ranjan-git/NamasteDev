public class RemoveElement {
    public static int removeElement(int[] array, int val) {
        int currentPosition = 0;

        for (int index = 0; index < array.length; index++) {
            if (array[index] != val) {
                array[currentPosition] = array[index];
                currentPosition++;
            }
        }

        return currentPosition;
    }

    public static void main(String[] args) {
        int[] array = { 3, 2, 2, 3 };
        System.out.println(removeElement(array, 3));
    }
}
