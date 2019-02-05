
// origin: https://www.codewars.com/kata/between-extremes/train/java
public class Kata {
    public static int betweenExtremes(int[] numbers) {
        int max = -2_147_483_648;
        int min = 2_147_483_647;
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] > max)
                max = numbers[i];
            if (numbers[i] < min)
                min = numbers[i];
        }
        return max - min;
    }
}

// alternative solution with the MIN/MAX from the wrapper class
public class Kata {
    public static int betweenExtremes(int[] numbers) {
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;
        for (int n : numbers) {
            max = max > n ? max : n;
            min = min < n ? min : n;
        }
        return max - min;
    }
}

// alternative solution with streams
// import java.util.stream.IntStream;
// import java.util.IntSummaryStatistics;

public class Kata {
    public static int betweenExtremes(int[] numbers) {
        IntSummaryStatistics stats = IntStream.of(numbers).summaryStatistics();
        return stats.getMax() - stats.getMin();
    }
}