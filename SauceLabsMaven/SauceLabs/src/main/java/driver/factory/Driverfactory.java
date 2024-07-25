package driver.factory;

import driver.Driver;
import driver.manager.DriverManager;
import driver.setUp.Android_Driver;
import driver.setUp.IOS_Driver;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;

import java.io.IOException;
public class Driverfactory {

    public static void initializeDriver(String platformName, String emulator, String udid, String deviceName) throws IOException {
        AppiumDriver<MobileElement> driver=null;

        switch (platformName) {
            case "Android":
//                driver = Driver.setUpDriverForAndroid(udid, deviceName, emulator);
                driver= new Android_Driver().setUpDriver(udid,deviceName,emulator);
                break;
            case "IOS":
                driver= new IOS_Driver().setUpDriver(udid,deviceName,emulator);
            default:
                System.out.println("PlATFORM NAME DOESNT MATCH "+platformName);
                break;
        }

        DriverManager.setAppiumDriver(driver);
//        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    public  static  void quitDriver(){
        DriverManager.getDriver().quit();
        DriverManager.unload();
    }
}
