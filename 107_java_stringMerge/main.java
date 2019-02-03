// origin: https://www.codewars.com/kata/string-merge/train/java
public class Kata {
    public static String stringMerge(String s1, String s2, char letter) {
        s1 = s1.substring(0, s1.indexOf(letter) + 1);
        s2 = s2.substring(s2.indexOf(letter) + 1);
        return s1 + s2;
    }
}

// alternative solution
public class Kata {
    public static String stringMerge(String s1, String s2, char c) {
        return s1.substring(0, s1.indexOf(c)) + s2.substring(s2.indexOf(c));
    }
}