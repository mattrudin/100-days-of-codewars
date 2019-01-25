// origin: https://www.codewars.com/kata/convert-a-number-to-a-string/train/java
class Kata {
    public static String numberToString(int num) {
        return num + "";
    }
}

// alternative solution:
class Kata {
    public static String numberToString(int num) {
        return String.valueOf(num);
    }
}

class Kata {
    public static String numberToString(int num) {
        return Integer.toString(num);
    }
}
