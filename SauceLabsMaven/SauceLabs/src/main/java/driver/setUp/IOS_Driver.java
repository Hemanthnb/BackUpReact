package driver.setUp;

import constants.FrameworkConstants;
import driver.DriverInterface;
import enums.ConfigJson;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.AutomationName;
import io.appium.java_client.remote.MobileCapabilityType;
import org.openqa.selenium.Platform;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.IOException;
import java.net.URL;

import static utils.loader.JsonLoader.getConfig;

public class IOS_Driver implements DriverInterface {
    @Override
    public AppiumDriver<MobileElement> setUpDriver(String udid, String deviceName, String emulator) throws IOException {
        AppiumDriver<MobileElement> driver = null;
        DesiredCapabilities capabilities = new DesiredCapabilities();

        switch (emulator) {
            case "Local":
                capabilities.setCapability(CapabilityType.PLATFORM_NAME, Platform.IOS);
                capabilities.setCapability(MobileCapabilityType.UDID, udid);
                capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, AutomationName.IOS_XCUI_TEST);
                capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, deviceName);
                capabilities.setCapability(MobileCapabilityType.APP, FrameworkConstants.ANDROID_APK_PATH);
                capabilities.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, getConfig(ConfigJson.APP_PACKAGE));
                capabilities.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY, getConfig(ConfigJson.APP_ACTIVITY));
                capabilities.setCapability(AndroidMobileCapabilityType.APP_WAIT_DURATION, 30000);
                driver = new IOSDriver<>(new URL(getConfig(ConfigJson.APPIUM_URL)), capabilities);
                break;

            case "Cloud":
                // Capabilities for Browser Stack.
                break;
            default:
                break;
        }
        return driver;
    }
}