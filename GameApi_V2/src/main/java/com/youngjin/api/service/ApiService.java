package com.youngjin.api.service;

import lombok.extern.slf4j.Slf4j;
import org.json.simple.parser.ParseException;

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

        return stringBuffer.toString();
    }

    protected String colorSelect(String prop){

        if(prop.equals("커먼")){
            return "gray";
        } else if(prop.equals("레어") || prop.equals("중급")){
            return "skyblue";
        } else if(prop.equals("하급") || prop.equals("최하급")){
            return "#886A08";
        } else if(prop.equals("레전더리")){
            return "#DF7401";
        } else if(prop.equals("유니크")){
            return "#DF01A5";
        } else if(prop.equals("에픽") || prop.equals("최상급") || prop.equals("상급")){
            return "#E0BA24";
        } else if(prop.equals("신화")){
            return "hidden";
        } else return "black";

    }


    public abstract List<VO> getList(String jsonString) throws ParseException;
    public abstract VO getData(String jsonString) throws ParseException;
    public abstract List<VO> getEquip(String jsonString) throws ParseException;

}
