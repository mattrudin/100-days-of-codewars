// origin: https://www.codewars.com/kata/will-there-be-enough-space/train/java

public class Bob {
    public static int enough(int cap, int on, int wait) {
        int passengers = cap - on - wait;
        return passengers > 0 ? 0 : passengers * -1;
    }
}

// alternative solution
public class Bob {
    public static int enough(int cap, int on, int wait) {
        return Math.max(0, on + wait - cap);
    }
}
