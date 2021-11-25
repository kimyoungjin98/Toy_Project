package com.youngjin.api.controller;

import com.youngjin.api.dao.CharDao;
import com.youngjin.api.model.CharDTO;
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
public class HomeController {

    protected final CharDao cDao;

    @RequestMapping(value="/", method = RequestMethod.GET)
    public String home(){

        return "content/home";
    }


    @RequestMapping(value="/list", method = RequestMethod.GET)
    public String list(String serverId, String characterId, Model model) throws IOException, ParseException {

        List<CharDTO> charList = cDao.getList(serverId, characterId);
        model.addAttribute("CHAR", charList);

        return "content/list";
    }


}
