import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class temp {
    public static void main(String[] args) {
        List<Integer> l1 = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
        System.out.println(l1);
        List<Integer> l2 = l1;
        l1.add(5);
        System.out.println(l1);
    }
}