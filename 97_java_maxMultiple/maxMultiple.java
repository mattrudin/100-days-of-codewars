// origin: https://www.codewars.com/kata/maximum-multiple/train/java
public class MaxMultiple {
    public static int maxMultiple(int divisor, int bound) {
        int result = 0;
        for (int i = bound; i > 0; i--) {
            if (i % divisor == 0) {
                result = i;
                break;
            }
        }
        return result;
    }
}

// alternative solution
public class MaxMultiple {
    public static int maxMultiple(int divisor, int bound) {
        return bound - (bound % divisor);
    }
}