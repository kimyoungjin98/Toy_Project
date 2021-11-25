package com.youngjin.api.dao;

import com.youngjin.api.model.CharDTO;
import com.youngjin.api.service.ApiService;
import com.youngjin.api.service.impl.ApiServiceImplV1;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Slf4j
@Repository
@RequiredArgsConstructor
public class CharDao implements GenericDao<CharDTO, String> {

    @Qualifier("apiServiceV1")
    protected final ApiService<CharDTO> apiService;

    @Override
    public List<CharDTO> getList(String serverId, String characterId) throws IOException, ParseException {

        String queryURL = apiService.queryURL(serverId, characterId);
        String jsonString = apiService.jsonString(queryURL);

        List<CharDTO> charList = apiService.getList(jsonString);

        return charList;
    }

    @Override
    public CharDTO getData(String s) {


        return null;
    }
}
