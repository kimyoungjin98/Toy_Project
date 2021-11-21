package com.youngjin.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

@Controller
public class ApiController {

    private String encodeURIComponet(String component) {

        String result = null;

        try {
            result = URLEncoder.encode(component, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            result = component;
        }

        return result;
    }

    @RequestMapping(value="/serverId", method= RequestMethod.POST)
    public String serverId(){

        String url = "https://api.neople.co.kr/df/servers?apikey=wv7TRdYKkynYMEHJEPVhxrCQUlbZJ2pA";
        String result = encodeURIComponet(url);

        return result;
    }

}
