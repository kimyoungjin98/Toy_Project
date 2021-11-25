package com.youngjin.api.dao;

import com.youngjin.api.model.CharDTO;
import com.youngjin.api.model.EquipDTO;
import com.youngjin.api.service.ApiService;
import com.youngjin.api.service.impl.EquipServiceImplV1;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Repository
public class EquipDao implements GenericDao<EquipDTO, String>{

    @Qualifier("equipServiceV1")
    protected final ApiService<EquipDTO> equipService;

    @Override
    public List<EquipDTO> getList(String serverId, String characterId) throws IOException, ParseException {

        String equipURL = equipService.queryURL(serverId,characterId);
        String jsonString = equipService.jsonString(equipURL);

        List<EquipDTO> eqList = equipService.getEquip(jsonString);

        return eqList;
    }

    @Override
    public EquipDTO getData(String s) {return null;}
}
