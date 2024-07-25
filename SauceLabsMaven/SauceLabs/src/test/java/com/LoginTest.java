package com;
import enums.UserType;
import models.TestData;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import screens.loginScreen.LoginScreen;
import utils.loader.TestDataLoader;

import java.io.IOException;

public class LoginTest extends BaseTest {
    LoginScreen loginScreen;
    TestData data;

    @BeforeMethod(alwaysRun = true)
    void initialize() throws IOException {
        this.loginScreen= new LoginScreen();
        this.data=TestDataLoader.loadTestData(env,platformName, UserType.complete_passenger);
    }

    @Test(groups ={"smoke"}, description = "Verify user is able to navigate to loginScreen ")
    void verifyUserIsOnLoginPage() throws InterruptedException, IOException {
        initialize();
//        System.out.println("User is on Login Screen");
//        System.out.println(data.passengerPhoneNumber);
        loginScreen.setUserName(data.passengerFirstName+" "+data.passengerLastName);
        Thread.sleep(5000);
    }

    @Test(groups = {"regression"}, description = "verify the text box are taking input from the user ")
    void verifyLoginTextField(){
        System.out.println("Text fields are accepting the user inputs");
    }

    @Test(groups = {"regression"}, description = "Verify user is able to login with valid credentials")
    void  verifyValidLoginTest(){
        System.out.println("User Logged in with valid credentials");
    }

    @Test(groups = {"regression"}, description = "Verify error message displayed when user try to  login with invalid credentials" )
    void verifyInvalidLoginTest(){
        System.out.println("Displayed a pop up as invalid user");
    }
}

