// origin: https://www.codewars.com/kata/total-amount-of-points/train/java

public class TotalPoints {

    public static int points(String[] games) {
        int result = 0;
        for (int i = 0; i < games.length; i++) {
            int first = Integer.parseInt(games[i].substring(0, 1));
            int second = Integer.parseInt(games[i].substring(2));
            if (first > second) {
                result += 3;
            } else if (first == second) {
                result += 1;
            } else if (first < second) {
                result += 0;
            }
        }
        return result;
    }
}