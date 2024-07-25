package utils.loader;

import constants.FrameworkConstants;
import enums.Environments;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class ConfigLoader {

    public static Properties loadProperties(String env) throws IOException {
        Properties properties = new Properties();
        String propertiesPath=null;
        if(env.equals(Environments.QA.name())){
            propertiesPath=FrameworkConstants.QA_PROPERTIES_PATH;
            System.setProperty("env",Environments.QA.name());
        }
        else if(env.equals(Environments.PRE_PROD.name())){
            propertiesPath=FrameworkConstants.PRE_PROD_PROPERTIES_PATH;
            System.setProperty("env",Environments.PRE_PROD.name());
        }

        try (FileInputStream input = new FileInputStream(propertiesPath)) {
            properties.load(input);
        }catch (Exception e){
            System.out.println("env is "+env);
        }
        return properties;
    }

}
