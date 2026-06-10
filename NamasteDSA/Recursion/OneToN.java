public class OneToN {
    static int n = 10;

    public static void oneToN(int x) {
        if (x > n)
            return;

        System.out.println(x);

        oneToN(++x);
    }

    public static void main(String[] args) {
        oneToN(1);
    }
}
