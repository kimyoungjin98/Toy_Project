package com.youngjin.api.service;

import org.json.simple.parser.ParseException;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

public abstract class ApiService<VO> {

    public abstract String queryURL(String serverId, String characterId);

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

    public abstract List<VO> getList(String jsonString) throws ParseException;
    public abstract VO getData(String jsonString);

}
