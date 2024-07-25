package constants;

import java.io.File;

public class FrameworkConstants {

    public static String ROOT = System.getProperty("user.dir");
    public  static  String ANDROID_APK_PATH = ROOT + File.separator +"src/test/resources/app/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk";

    public  static String QA_PROPERTIES_PATH= ROOT + File.separator + "src/test/resources/config/config.qa.properties";

    public  static String PRE_PROD_PROPERTIES_PATH= ROOT + File.separator + "src/test/resources/config/config.pre_prod.properties";

    public static String CONFIG_JSON_PATH= ROOT + File.separator + "src/test/resources/config/config.json";

    public  static  String TEST_DATA_PATH= ROOT+ File.separator+ "src/test/resources/testdata/CBU.json";
}
