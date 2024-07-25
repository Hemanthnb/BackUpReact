package screens;

import driver.manager.DriverManager;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.support.PageFactory;

public class BaseScreen {
    public  BaseScreen() {
        System.out.println("I am here "+ DriverManager.getDriver());
    }

}
