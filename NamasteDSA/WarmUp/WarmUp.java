public class WarmUp {
    static void countDigits(int num) {
        if (num == 0) {
            System.out.println(1);
            return;
        }
        int counter = 0;
        while (num > 0) {
            num /= 10;
            counter++;
        }

        System.out.println(counter);
    }

    public static void main(String args[]){
        countDigits(657689);
    }
}