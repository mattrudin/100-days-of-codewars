// origin: https://www.codewars.com/kata/58223370aef9fc03fd000071/train/java
public class Solution {

    public static String dashatize(long num) {
        long number = (long) Math.abs(num);
        if (Long.toString(number).length() < 1 || number < 1)
            return number + "";

        String[] numbers = Long.toString(number).split("");
        String result = "";

        for (int i = 0; i < numbers.length; i++) {
            if (Long.parseLong(numbers[i]) % 2 == 0) {
                result += numbers[i];
            } else {
                result += "-" + numbers[i] + "-";
            }
        }

        result = result.replace("--", "-");

        if (result.startsWith("-") && result.endsWith("-")) {
            result = result.substring(1, result.length() - 1);
        } else if (result.startsWith("-")) {
            result = result.substring(1);
        } else if (result.endsWith("-")) {
            result = result.substring(0, result.length() - 1);
        }

        return result;
    }

}

// alternative solution with regexp
public class Solution {

    public static String dashatize(int num) {
        return Integer.toString(num).replaceAll("([13579])", "-$1-").replaceAll("--", "-").replaceAll("^-", "")
                .replaceAll("-$", "");
    }
}
