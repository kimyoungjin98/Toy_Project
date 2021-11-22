package com.youngjin.api.model;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class CharDTO {

    private String serverId;
    private String characterId;
    private String characterName;
    private String level;
    private String jobId;
    private String jobGrowId;
    private String jobName;
    private String jobGrowName;

    private String adventureName;
    private String imgUrl(String serverId, String characterId){
        String url = "https://img-api.neople.co.kr/df/servers/" + serverId + "/characters/" + characterId + "?zoom=<zoom>";

        return url;
    }


}
