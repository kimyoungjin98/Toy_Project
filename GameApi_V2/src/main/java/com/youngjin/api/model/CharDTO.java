package com.youngjin.api.model;

import lombok.*;

import java.util.Map;

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
    private String img;

    private String adventureName;
    private Map<String, String> buff;
    private Map<String, String> status;


}
