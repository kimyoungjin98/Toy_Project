package com.youngjin.api.controller;

import com.youngjin.api.model.CharDTO;
import com.youngjin.api.service.ApiService;
import com.youngjin.api.service.impl.ApiServiceImplV1;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.IOException;

@Controller
public class HomeController {

    private ApiService<CharDTO> apiService;

    public HomeController(ApiService<CharDTO> apiService) {
        this.apiService = apiService;
    }

    @RequestMapping(value="/", method = RequestMethod.GET)
    public String home(){

        return "content/home";
    }


    @RequestMapping(value="/", method = RequestMethod.POST)
    public String home(String serverId, String Id){

        apiService = new ApiServiceImplV1();
        String queryURL = apiService.queryURL(serverId, Id);
        Object obj = null;
        try {
            obj = apiService.jsonString(queryURL);
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println(obj);

        return "content/list";
    }




}
