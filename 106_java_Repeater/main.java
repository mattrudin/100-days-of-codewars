// origin: https://www.codewars.com/kata/thinkful-string-drills-repeater/train/java
public class Repeater {
    public static String repeat(String string, long n) {
        String result = "";
        for (int i = 0; i < n; i++) {
            result += string;
        }
        return result;
    }
}

// alternative solution
public class Repeater {
    public static String repeat(String string, long n) {
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < n; i++) {
            builder.append(string);
        }
        return builder.toString();
    }
}