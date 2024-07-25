package org.example;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;


    public class MyTestClass {

        @Test
        @Parameters({"num1", "num2"})
        public void testAddition(int num1, int num2) {
            int result = num1 + num2;
            System.out.println("Result of addition: " + result);
        }
    }
