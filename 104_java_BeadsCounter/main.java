// origin: https://www.codewars.com/kata/simple-beads-count/train/java

public class BeadsCounter {
    public static int countRedBeads(final int nBlue) {
        return nBlue < 2 ? 0 : (nBlue - 1) * 2;
    }
}
