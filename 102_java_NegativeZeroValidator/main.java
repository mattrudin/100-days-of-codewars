// origin: https://www.codewars.com/kata/is-it-negative-zero-0/train/java
public class NegativeZeroValidator {
    public static boolean isNegativeZero(float n) {
        return (new Float(n)).equals(new Float(-0.0));
    }
}

// alternative solution
public class NegativeZeroValidator {
    public static Boolean isNegativeZero(Float n) {
        return n.equals(-0f);
    }
}
