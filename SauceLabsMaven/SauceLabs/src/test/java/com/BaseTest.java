package com;

import driver.factory.Driverfactory;
import driver.manager.DriverManager;
import org.testng.annotations.*;
import utils.CredentialManager;
import utils.loader.ConfigLoader;

import java.io.IOException;


public class BaseTest {
    protected String env,platformName;

    @Parameters({"env", "platformName", "emulator", "udid", "deviceName"})
    @BeforeMethod(alwaysRun = true)
    public void launchTest(@Optional("QA") String env, @Optional("Android") String platformName, @Optional("Local") String emulator, @Optional("emulator-5554") String udid, @Optional("Pixel 5 API 31") String deviceName) throws IOException, InterruptedException {

        this.env=env.toLowerCase();
        this.platformName=platformName.toUpperCase();
//        ConfigLoader.loadProperties(env);
        Driverfactory.initializeDriver(platformName, emulator, udid, deviceName);
        Thread.sleep(30000);
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown() {
        Driverfactory.quitDriver();
    }

}
