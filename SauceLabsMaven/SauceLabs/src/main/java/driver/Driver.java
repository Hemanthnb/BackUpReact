package driver;

import constants.FrameworkConstants;
import enums.ConfigJson;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.remote.AndroidMobileCapabilityType;
import io.appium.java_client.remote.AutomationName;
import io.appium.java_client.remote.MobileCapabilityType;
import org.openqa.selenium.Platform;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.CapabilityType;

import java.io.IOException;
import java.net.URL;

import static utils.loader.JsonLoader.getConfig;

public class Driver {

    public static AppiumDriver<MobileElement> setUpDriverForAndroid(String udid, String deviceName, String emulator) throws IOException {

        AppiumDriver<MobileElement> AndroidDriver = null;
        DesiredCapabilities capabilities = new DesiredCapabilities();

        switch (emulator) {
            case "Local":
                capabilities.setCapability(CapabilityType.PLATFORM_NAME, Platform.ANDROID);
                capabilities.setCapability(MobileCapabilityType.UDID, udid);
                capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, AutomationName.ANDROID_UIAUTOMATOR2);
                capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, deviceName);
                capabilities.setCapability(MobileCapabilityType.APP, FrameworkConstants.ANDROID_APK_PATH);
                capabilities.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, getConfig(ConfigJson.APP_PACKAGE));
                capabilities.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY, getConfig(ConfigJson.APP_ACTIVITY));
                capabilities.setCapability(AndroidMobileCapabilityType.APP_WAIT_DURATION, 30000);
                AndroidDriver = new AndroidDriver(new URL(getConfig(ConfigJson.APPIUM_URL)), capabilities);
                break;

            case "Cloud":
                // Capabilities for Browser Stack.
                break;


            default:
                capabilities.setCapability(CapabilityType.PLATFORM_NAME, Platform.ANDROID);
                capabilities.setCapability(MobileCapabilityType.UDID, udid);
                capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME, AutomationName.ANDROID_UIAUTOMATOR2);
                capabilities.setCapability(MobileCapabilityType.DEVICE_NAME, deviceName);
                capabilities.setCapability(MobileCapabilityType.APP, FrameworkConstants.ANDROID_APK_PATH);
                capabilities.setCapability(AndroidMobileCapabilityType.APP_PACKAGE, getConfig(ConfigJson.APP_PACKAGE));
                capabilities.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY, getConfig(ConfigJson.APP_ACTIVITY));
                AndroidDriver = new AndroidDriver(new URL(getConfig(ConfigJson.APPIUM_URL)), capabilities);
                break;

        }

        return AndroidDriver;
    }

    public static AppiumDriver<MobileElement> setUpDriverForIOS(String udid, String deviceName, String emulator) throws IOException {

        AppiumDriver<MobileElement> IosDriver = null;
        DesiredCapabilities capabilities = new DesiredCapabilities();

        switch (emulator) {
            case "Local":
                // IOS Capabilities for Local

            case "Cloud":
                // IOS Capabilities for Browser Stack.
                break;


            default:
               // Default Capabilities will be IOS Local
                break;

        }

        return IosDriver;


    }
}
