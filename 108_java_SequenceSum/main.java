// origin: https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/java
public class SequenceSum {

    public static String showSequence(int value) {
        if (value == 0)
            return "0=0";
        if (value < 0)
            return value + "<0";

        int sum = 0;
        int counter = 0;
        String result = "";

        while (counter != value + 1) {
            result += counter + "+";
            sum += counter;
            counter++;
        }

        return result.substring(0, result.length() - 1) + " = " + sum;
    }
}