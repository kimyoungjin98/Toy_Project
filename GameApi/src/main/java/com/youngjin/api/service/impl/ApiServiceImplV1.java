package com.youngjin.api.service.impl;

import com.youngjin.api.config.ApiConfig;
import com.youngjin.api.model.CharDTO;
import com.youngjin.api.service.ApiService;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;

@Service
public class ApiServiceImplV1 extends ApiService<CharDTO> {


    @Override
    public String queryURL(String serverId, String characterId) {
        if(serverId == null) {
            serverId = "all";
        }

        try {
            characterId = URLEncoder.encode("투창깎는노인", "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        String queryURL = "https://api.neople.co.kr/df/servers/" + "cain" + "/characters?characterName=" + characterId + "&apikey=";
        queryURL += ApiConfig.apiKey;

        return queryURL;
    }

    @Override
    public List<CharDTO> getList(String jsonString) throws ParseException {

        JSONParser jsonParser = new JSONParser();

        JSONObject jsonObject = (JSONObject) jsonParser.parse(jsonString);
        JSONArray result = (JSONArray) jsonObject.get("rows");

        System.out.println(result);

        return null;
    }

    @Override
    public CharDTO getData(String jsonString) {
        return null;
    }
}
