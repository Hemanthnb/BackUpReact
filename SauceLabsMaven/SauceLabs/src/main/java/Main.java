import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import constants.FrameworkConstants;
import models.TestData;

import java.io.File;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        // Specify the path to your JSON file

        // Create ObjectMapper instance
        ObjectMapper mapper = new ObjectMapper();

        // Read JSON file and map to JsonNode
        JsonNode jsonNode = mapper.readTree(new File(FrameworkConstants.TEST_DATA_PATH));

        // Define environment, platform, and userType
        String env = "uat";
        String platform = "ANDROID";
        String userType = "complete_passenger";

        // Navigate through the JSON structure to get userData
        JsonNode userData = jsonNode
                .get("test_group")
                .get("all")
                .get("env")
                .get(env)
                .get(platform)
                .get(userType)
                .get(0); // Assuming you're fetching the first item in the array

        // Map JSON data to Credentials object
        TestData credentials = mapper.treeToValue(userData, TestData.class);

        // Access fields in credentials object
        System.out.println("Passenger Phone Number: " + credentials.passengerPhoneNumber);
        // Add more fields as needed

        // Use credentials object in your application logic
    }
}
