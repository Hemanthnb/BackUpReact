package driver;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;

import java.io.IOException;

public interface DriverInterface {
    abstract  AppiumDriver<MobileElement> setUpDriver(String udid, String deviceName, String emulator) throws IOException;
}
