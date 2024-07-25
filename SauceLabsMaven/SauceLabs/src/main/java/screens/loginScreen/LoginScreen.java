package screens.loginScreen;

import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import screens.BaseScreen;

import static driver.manager.DriverManager.getDriver;
import static screens.Actions.setText;

public class LoginScreen extends BaseScreen {
    @AndroidFindBy(xpath = "//android.widget.EditText[@content-desc=\"test-Username\"]")
    private MobileElement userNameTextField;

    public LoginScreen(){
//        PageFactory.initElements(new AppiumFieldDecorator(getDriver()), this);
    }

        public void setUserName(String userName) throws InterruptedException {
            MobileElement userNameTextField =getDriver().findElement(By.xpath("//android.widget.EditText[@content-desc=\"test-Username\"]"));
            setText(userNameTextField,userName);

        }

}