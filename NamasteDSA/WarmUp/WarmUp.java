public class WarmUp {
    public static boolean checkVotingEligibility(int age) {
        return age >= 18;
    }

    public static int countDigits(int num) {
        if (num == 0) {
            return 1;
        }

        num = Math.abs(num);

        if (num < 10) {
            return 1;
        }

        int counter = 0;

        while (num > 0) {
            num = num / 10;
            counter++;
        }

        return counter;
    }

    public static int countNegativeNumbers(int[] array) {
        int counter = 0;

        for (int i = 0; i < array.length; i++) {
            if (array[i] < 0) {
                counter++;
            }
        }

        return counter;
    }

    public static boolean evenOrOddNumber(int num) {
        return num % 2 == 0 ? true : false;
    }

    public static int countEvenNumbers(int[] array) {
        int counter = 0;

        for (int i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                counter++;
            }
        }

        return counter;
    }

    public static int largestNumber(int[] array) {
        int maxNumber = array[0];

        for (int i = 1; i < array.length; i++) {
            if (array[i] > maxNumber) {
                maxNumber = array[i];
            }
        }

        return maxNumber;
    }

    public static int secondLargestNumber(int[] array) {
        int largestNumber = 0;
        int secondLargestNumber = 0;

        if (array[0] > array[1]) {
            largestNumber = array[0];
            secondLargestNumber = array[1];
        } else {
            largestNumber = array[1];
            secondLargestNumber = array[0];
        }

        for (int i = 2; i < array.length; i++) {
            if (array[i] > largestNumber) {
                secondLargestNumber = largestNumber;
                largestNumber = array[i];
            } else if (array[i] > secondLargestNumber) {
                secondLargestNumber = array[i];
            }
        }

        return secondLargestNumber;
    }

    public static int smallestNumber(int[] array) {
        int minNumber = array[0];

        for (int i = 1; i < array.length; i++) {
            if (array[i] < minNumber) {
                minNumber = array[i];
            }
        }

        return minNumber;
    }

    public static int reverseNumber(int num) {
        int copyNumber = num;
        num = Math.abs(num);
        int reverse = 0;

        while (num > 0) {
            reverse = reverse * 10 + (num % 10);
            num = num / 10;
        }

        if (reverse < -Math.pow(reverse, 31) || reverse > Math.pow(reverse, 31)) {
            return 0;
        }

        return copyNumber < 0 ? -reverse : reverse;
    }

    public static boolean palindromeNumber(int num) {
        int reverse = reverseNumber(num);

        return reverse == num;
    }

    public static void main(String args[]) {
        System.out.println(checkVotingEligibility(3));

        System.out.println(countDigits(-4561));

        int[] countNegativeNumbersArray = { 3, -56, 25, -7, 34, 7, 9, -3, 5, -8, 3, 5
        };
        System.out.println(countNegativeNumbers(countNegativeNumbersArray));

        System.out.println(evenOrOddNumber(3));

        int[] countEvenNumbersArray = { 3, 56, 25, 7, 34, 7, 9, 3, 5, 8, 3, 5 };
        System.out.println(countEvenNumbers(countEvenNumbersArray));

        int[] largestNumberArray = { 3, -56, 25, -7, 34, 7, 9, -3, 5, -8, 3, 5 };
        System.out.println(largestNumber(largestNumberArray));

        int[] secondLargestNumberArray = { 3, -56, 25, -7, 34, 7, 9, -3, 5, -8, 3, 5
        };
        System.out.println(secondLargestNumber(secondLargestNumberArray));

        int[] smallestNumberArray = { 3, -56, 25, -7, 34, 7, 9, -3, 5, -8, 3, 5 };
        System.out.println(smallestNumber(smallestNumberArray));

        System.out.println(reverseNumber(1534236469));

        System.out.println(palindromeNumber(45654));
    }
}