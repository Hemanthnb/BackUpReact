package utils;

import utils.loader.ConfigLoader;

import java.io.IOException;
import java.util.Properties;

public class CredentialManager {

    private static Properties properties;

    static {
        try {
            properties = ConfigLoader.loadProperties(System.getProperty("env","QA"));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static String getUserName() {
        return properties.getProperty("username");
    }

    public static String getPassword() {
        return properties.getProperty("password");
    }
}
