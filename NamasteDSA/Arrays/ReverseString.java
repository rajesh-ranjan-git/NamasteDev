public class ReverseString {
    public static void reverseString(char[] s) {
        int start = 0;
        int end = s.length - 1;

        while (start <= end) {
            char temp = s[end];
            s[end] = s[start];
            s[start] = temp;

            start++;
            end--;
        }

        System.out.println(s);
    }

    public static void main(String[] args) {
        char[] s = { 'h', 'e', 'l', 'l', 'o' };
        reverseString(s);
    }
}
