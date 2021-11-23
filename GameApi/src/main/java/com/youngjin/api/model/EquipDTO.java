package com.youngjin.api.model;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EquipDTO {

    private String slotId;
    private String slotName;
    private String itemId;
    private String itemType;
    private String itemTypeDetail;
    private String itemAvailableLevel;
    private String itemRarity;
    private String itemGradeName;
    private String setItemId;
    private String setItemName;
    private String reinforce;
    private String amplificationName;
    private String refine;


}
