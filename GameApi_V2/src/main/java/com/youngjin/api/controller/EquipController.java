package com.youngjin.api.controller;

import com.youngjin.api.dao.CharDao;
import com.youngjin.api.dao.EquipDao;
import com.youngjin.api.model.CharDTO;
import com.youngjin.api.model.EquipDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@Slf4j
@Controller
public class EquipController {

    protected final EquipDao eDao;
    protected final CharDao cDao;

    // URI 주소로 보낸 파라메터 순서와 맵핑 파라메터 순서가 다르면 X
    @RequestMapping(value="/modal/equip/{server}/{characterId}/{characterName}", method = RequestMethod.GET)
    public String modal(@PathVariable("characterId") String characterId,
                        @PathVariable("characterName") String characterName,
                        @PathVariable("server") String server,
                        Model model) throws IOException, ParseException {

        List<EquipDTO> eList = eDao.getList(server, characterId);
        CharDTO charDTO = cDao.getList(server, characterName).get(0);

        if (eList != null && charDTO != null) {
            model.addAttribute("EQUIP", eList);
            model.addAttribute("DETAIL", charDTO);
            return "modal";
        } else{
            return "redirect:/";
        }

    }
}
