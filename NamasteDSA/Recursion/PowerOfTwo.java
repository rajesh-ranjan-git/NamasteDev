public class PowerOfTwo {
    public static boolean powerOfTwo(int n) {
        if (n == 2 || n == 1) return true;

        if (n == 0 || n % 2 != 0) return false;

        return powerOfTwo(n / 2);
    }

    public static void main(String[] args) {
        System.out.println(powerOfTwo(2048));
    }
}