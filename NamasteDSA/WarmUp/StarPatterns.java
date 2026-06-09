public class StarPatterns {
    public static void squarePattern(int rows) {
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < rows; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void firstTrianglePattern(int rows) {
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void secondTrianglePattern(int rows) {
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print(j + 1 + " ");
            }
            System.out.println();
        }
    }

    public static void thirdTrianglePattern(int rows) {
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print(i + 1 + " ");
            }
            System.out.println();
        }
    }

    public static void fourthTrianglePattern(int rows) {
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < rows - i; j++) {
                System.out.print(j + 1 + " ");
            }
            System.out.println();
        }
    }

    public static void fifthTrianglePattern(int rows) {
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < rows - i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void sixthTrianglePattern(int rows) {
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < rows - (i + 1); j++) {
                System.out.print("  ");
            }
            for (int j = 0; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void main(String args[]) {
        squarePattern(4);
        System.out.println();
        firstTrianglePattern(4);
        System.out.println();
        secondTrianglePattern(4);
        System.out.println();
        thirdTrianglePattern(4);
        System.out.println();
        fourthTrianglePattern(4);
        System.out.println();
        fifthTrianglePattern(4);
        System.out.println();
        sixthTrianglePattern(4);
    }
}