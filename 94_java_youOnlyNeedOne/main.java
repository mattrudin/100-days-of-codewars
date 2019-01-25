
// origin: https://www.codewars.com/kata/you-only-need-one-beginner/train/java

import java.util.*;

public class Solution {
    
    public static boolean check(Object[] a, Object x) {
        return Arrays.asList(a).contains(x);
    }
}

// alternative solution with lambda notation
import java.util.Arrays;

public class SolutionAlt {

    public static boolean check(Object[] a, Object x) {
        return Arrays.stream(a).anyMatch(e -> e == x);
    }
}
