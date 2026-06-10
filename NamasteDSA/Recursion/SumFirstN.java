public class SumFirstN {
    public static int sumFirstN(int n) {
        if(n == 1) return 1;

        return n + sumFirstN(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(sumFirstN(5));
    }
}