package utils.loader;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import constants.FrameworkConstants;
import enums.UserType;
import models.TestData;

import java.io.File;
import java.io.IOException;

public class TestDataLoader {


    public static TestData loadTestData(String env, String platformName, UserType userType) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        // Read JSON file and map to JsonNode
        JsonNode jsonNode = mapper.readTree(new File(FrameworkConstants.TEST_DATA_PATH));
        // Navigate through the JSON structure to get userData
        JsonNode userData = jsonNode
                .get("test_group")
                .get("all")
                .get("env")
                .get(env)
                .get(platformName)
                .get(userType.name())
                .get(0); // Assuming you're fetching the first item in the array
        // Map JSON data to Credentials object
        TestData testData = mapper.treeToValue(userData, TestData.class);
        return  testData;
        // Access fields in credentials object
    }

}