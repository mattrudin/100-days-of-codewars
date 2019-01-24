// origin: https://www.codewars.com/kata/parse-nice-int-from-char-problem/train/java
public class CharProblem {
    public static int howOld(final String herOld) {

        return Integer.parseInt(herOld.split(" ")[0]);

    }
}

// alternative solution
public class CharProblem {
    public static int howOld(final String herOld) {

        return Character.getNumericValue(herOld.charAt(0));
    }
}