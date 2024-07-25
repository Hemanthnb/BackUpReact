package utils.loader;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import constants.FrameworkConstants;
import enums.ConfigJson;
import freemarker.template.utility.NullArgumentException;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class JsonLoader {
    private static Map<String, String> map;

    static void readJson(String jsonPath) throws IOException {
        try {
            map = new ObjectMapper().readValue(new File(jsonPath),
                    new TypeReference<HashMap<String, String>>() {
                    });
        } catch (IOException e) {
            throw (e);
        }
    }

    public static String getConfig(ConfigJson key) throws IOException {
        readJson(FrameworkConstants.CONFIG_JSON_PATH);
        if (Objects.isNull(map.get(key.name().toLowerCase()))) {
            throw(new NullArgumentException());
        }
        return map.get(key.name().toLowerCase());
    }
}
