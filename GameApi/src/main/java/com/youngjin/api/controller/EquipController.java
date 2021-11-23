package com.youngjin.api.controller;

import com.youngjin.api.dao.EquipDao;
import com.youngjin.api.model.CharDTO;
import com.youngjin.api.model.EquipDTO;
import com.youngjin.api.service.ApiService;
import com.youngjin.api.service.impl.ApiServiceImplV1;
import com.youngjin.api.service.impl.EquipServiceImplV1;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@Slf4j
@Controller
public class EquipController {

    protected final EquipDao eDao;

    @ResponseBody
    @RequestMapping(value="/modal/equip", method = RequestMethod.GET)
    public String modal(@RequestParam("serverId") String serverId, @RequestParam("characterId") String characterId,
                        Model model) throws IOException, ParseException {

        List<EquipDTO> eList =  eDao.getList(serverId, characterId);
        if(eList != null){
            model.addAttribute("EQUIPLIST", eList);
            return "OK";
        } else{
            return "FAIL";
        }

    }
}
