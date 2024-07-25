package screens;

import io.appium.java_client.MobileElement;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.function.Function;

import static driver.manager.DriverManager.getDriver;

public class Waits {

//    public static Function<MobileElement, WebElement> waitTillVisible = element -> {
//        return new WebDriverWait(getDriver(), 10)
//                .until(ExpectedConditions.visibilityOf(element));
//    };

    protected static WebElement waitTillVisible(WebElement element){
        return new WebDriverWait(getDriver(), 20)
                .until(ExpectedConditions.visibilityOf(element));
    }


}
