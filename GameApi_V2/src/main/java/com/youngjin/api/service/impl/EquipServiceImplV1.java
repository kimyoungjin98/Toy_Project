package com.youngjin.api.service.impl;

import com.youngjin.api.config.ApiConfig;
import com.youngjin.api.config.ApiKeyConfig;
import com.youngjin.api.model.EquipDTO;
import com.youngjin.api.service.ApiService;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service("equipServiceV1")
public class EquipServiceImplV1 extends ApiService<EquipDTO> {

    @Override
    public String queryURL(String serverId, String characterId) {

        String encCharacterId = encodeURIComponent(characterId);

        String queryURL = "https://api.neople.co.kr/df/servers/" + serverId + "/characters/" + encCharacterId +"/equip/equipment?apikey=";
        queryURL += ApiKeyConfig.apiKey;

        log.debug("EQUIP URL : " + queryURL);

        return queryURL;
    }

    @Override
    public List<EquipDTO> getList(String jsonString) throws ParseException {
        return null;
    }

    @Override
    public EquipDTO getData(String jsonString) {
        return null;
    }

    @Override
    public List<EquipDTO> getEquip(String jsonString) throws ParseException {
            JSONParser jsonParser = new JSONParser();

            JSONObject jsonObject = (JSONObject) jsonParser.parse(jsonString);
            JSONArray jsonArray = (JSONArray) jsonObject.get("equipment");

            List<EquipDTO> equipList = new ArrayList<>();

            int eSize = jsonArray.size();
            for(int i = 0 ; i < eSize ; i++){
                JSONObject object = (JSONObject) jsonArray.get(i);
                String slotId = String.valueOf(object.get("slotId"));
                String slotName = String.valueOf(object.get("slotName"));
                String itemId = String.valueOf(object.get("itemId"));
                String itemType = String.valueOf(object.get("itemType"));
                String itemTypeDetail = String.valueOf(object.get("itemTypeDetail"));
                String itemAvailableLevel = String.valueOf(object.get("itemAvailableLevel"));
                String itemRarity = String.valueOf(object.get("itemRarity"));
                String itemGradeName = object.get("itemGradeName") == null ? " " : String.valueOf(object.get("itemGradeName"));
                String itemName = String.valueOf(object.get("itemName"));
                String setItemId = object.get("setItemId") == null ? " " : String.valueOf(object.get("setItemId"));
                String setItemName = object.get("setItemName") == null ? " " : String.valueOf(object.get("setItemName"));

                String itemColor = colorSelect(itemRarity);
                String gradeColor = colorSelect(itemGradeName);

                EquipDTO equipDTO = EquipDTO.builder()
                        .slotId(slotId)
                        .slotName(slotName)
                        .itemId(itemId)
                        .itemName(itemName)
                        .setItemName(setItemName)
                        .setItemId(setItemId)
                        .itemType(itemType)
                        .itemTypeDetail(itemTypeDetail)
                        .itemAvailableLevel(itemAvailableLevel)
                        .itemRarity(itemRarity)
                        .itemGradeName(itemGradeName)
                        .itemColor(itemColor)
                        .gradeColor(gradeColor)
                        .build();

                equipList.add(equipDTO);

            }


        return equipList;
    }
}
