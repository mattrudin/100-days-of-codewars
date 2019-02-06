// origin: https://www.codewars.com/kata/abbreviate-a-two-word-name/train/java
public class AbbreviateTwoWords {

    public static String abbrevName(String name) {
        String[] names = name.split(" ");
        return names[0].toUpperCase().charAt(0) + "." + names[1].toUpperCase().charAt(0);
    }
}