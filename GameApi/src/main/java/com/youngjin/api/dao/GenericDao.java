package com.youngjin.api.dao;

import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.IOException;
import java.util.List;

public interface GenericDao<VO, PK> {

    public List<VO> getList(PK serverId,PK characterId) throws IOException, ParseException;
    public VO getData(PK pk);

}
