package com.youngjin.api.controller;

import com.youngjin.api.model.CharDTO;
import com.youngjin.api.model.EquipDTO;
import com.youngjin.api.service.ApiService;
import com.youngjin.api.service.impl.ApiServiceImplV1;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.IOException;
import java.util.List;

@Slf4j
@Controller
public class HomeController {

    private ApiService<CharDTO> apiService;
    private ApiService<EquipDTO> equipService;

    public HomeController(ApiService<CharDTO> apiService, ApiService<EquipDTO> equipService) {
        this.apiService = apiService;
        this.equipService = equipService;
    }

    @RequestMapping(value="/", method = RequestMethod.GET)
    public String home(){

        return "content/home";
    }


    @RequestMapping(value="/list", method = RequestMethod.GET)
    public String list(String serverId, String Id, Model model) throws IOException, ParseException {

        apiService = new ApiServiceImplV1();
        String queryURL = apiService.queryURL(serverId, Id);

        String jsonString = apiService.jsonString(queryURL);
        List<CharDTO> charList =  apiService.getList(jsonString);

        model.addAttribute("CHAR", charList);

        return "content/list";
    }

    @RequestMapping(value="/modal", method = RequestMethod.GET)
    public String modal(@RequestParam("serverId") String serverId, @RequestParam("characterId") String characterId) throws IOException {

        apiService = new ApiServiceImplV1();
        String equipURL = apiService.queryURL(serverId,characterId);
        String jsonString = apiService.jsonString(equipURL);

        return "content/home";
    }
}
