package com.youngjin.api.service.impl;

import com.youngjin.api.config.ApiConfig;
import com.youngjin.api.model.CharDTO;
import com.youngjin.api.model.EquipDTO;
import com.youngjin.api.service.ApiService;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class ApiServiceImplV1 extends ApiService<CharDTO> {

    @Override
    public String queryURL(String serverId, String characterId) {

        if(serverId == null || serverId == "") {
            serverId = "all";
        }

        String encCharacterId = encodeURIComponent(characterId);

        String queryURL = "https://api.neople.co.kr/df/servers/" + serverId + "/characters?characterName=" + encCharacterId + "&apikey=";
        queryURL += ApiConfig.apiKey;

        return queryURL;
    }

    @Override
    public List<CharDTO> getList(String jsonString) throws ParseException {

        JSONParser jsonParser = new JSONParser();

        JSONObject jsonObject = (JSONObject) jsonParser.parse(jsonString);
        JSONArray jsonArray = (JSONArray) jsonObject.get("rows");

        List<CharDTO> charList = new ArrayList<>();

        int cSize = jsonArray.size();
        for(int i = 0 ; i < cSize ; i++){
            JSONObject obj = (JSONObject) jsonArray.get(i);
            String serverId = String.valueOf(obj.get("serverId"));
            String characterId = String.valueOf(obj.get("characterId"));
            String characterName = String.valueOf(obj.get("characterName")) ;
            String level = String.valueOf(obj.get("level"));
            String jobId = String.valueOf(obj.get("jobId"));
            String jobName = String.valueOf(obj.get("jobName"));
            String jobGrowName = String.valueOf(obj.get("jobGrowName"));

            CharDTO charDTO = CharDTO.builder()
                    .serverId(serverId)
                    .characterId(characterId)
                    .characterName(characterName)
                    .level(level)
                    .jobId(jobId)
                    .jobName(jobName)
                    .jobGrowName(jobGrowName)
                    .img(imgUrl(serverId,characterId))
                    .build();

            charList.add(charDTO);
        }

        return charList;
    }

    @Override
    public CharDTO getData(String jsonString) {
        return null;
    }

    @Override
    public List<CharDTO> getEquip(String jsonString) throws ParseException {
        return null;
    }

}
