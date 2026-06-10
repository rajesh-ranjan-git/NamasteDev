public class NToOne {
    public static void nToOne(int n) {
        if (n == 0)
            return;

        System.out.println(n);

        nToOne(--n);
    }

    public static void main(String[] args) {
        nToOne(10);
    }
}
