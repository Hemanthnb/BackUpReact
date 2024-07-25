package screens;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;

import static screens.Waits.waitTillVisible;

public class Actions extends  Waits {

    public static void setText(MobileElement element, String text){
        waitTillVisible(element).sendKeys(text);
    }

}
