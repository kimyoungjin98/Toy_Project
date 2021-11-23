package com.youngjin.api.dao;

import com.youngjin.api.model.EquipDTO;
import com.youngjin.api.service.ApiService;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class EquipDao implements GenericDao<EquipDTO, String>{

    protected final ApiService<EquipDTO> apiService;

    @Override
    public List<EquipDTO> getList(String serverId, String characterId) throws IOException, ParseException {

        String equipURL = apiService.queryURL(serverId,characterId);
        String jsonString = apiService.jsonString(equipURL);
        List<EquipDTO> eqList = apiService.getList(jsonString);

        return eqList;
    }

    @Override
    public EquipDTO getData(String s) {
        return null;
    }
}
