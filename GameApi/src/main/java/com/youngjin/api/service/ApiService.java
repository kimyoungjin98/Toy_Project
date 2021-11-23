package com.youngjin.api.service;

import lombok.extern.slf4j.Slf4j;
import org.json.simple.parser.ParseException;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.List;

@Slf4j
public abstract class ApiService<VO> {

    public abstract String queryURL(String serverId, String characterId);

    // URL Encoding method
    protected static String encodeURIComponent(String component)   {

        String result = null;

        try {
            result = URLEncoder.encode(component, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            result = component;
        }

        return result;
    }

    // 캐릭터 이미지 url 받아오기
    protected String imgUrl(String serverId, String characterId){
        String url = "https://img-api.neople.co.kr/df/servers/" + serverId + "/characters/" + characterId + "?zoom=<zoom>";

        return url;
    }

    public String jsonString(String queryURL) throws IOException {

        URL url = new URL(queryURL);
        HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
        httpConn.setRequestMethod("GET");

        int resCode = httpConn.getResponseCode();
        BufferedReader buffer = null;
        InputStreamReader is = null;

        if(resCode == 200){
            is = new InputStreamReader(httpConn.getInputStream());
        } else {
            is = new InputStreamReader(httpConn.getErrorStream());
        }

        // 인풋스트림리더와 버퍼드리더를 파이프?로 연결하기
        buffer = new BufferedReader(is);
        StringBuffer stringBuffer = new StringBuffer();

        String reader = new String();
        while((reader = buffer.readLine()) != null){
            stringBuffer.append(reader);
        }
        buffer.close();

        log.debug("JSON 데이터 : {}", stringBuffer.toString());

        return stringBuffer.toString();
    }

    public abstract List<VO> getList(String jsonString) throws ParseException;
    public abstract VO getData(String jsonString);
    public abstract List<VO> getEquip(String jsonString) throws ParseException;

}
