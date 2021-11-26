<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="rootPath" value="${pageContext.request.contextPath}"/>
<body>
<div class="div_info">
<img src="${DETAIL.img}">
        <label class="info_name">${DETAIL.characterName}</label>
        <label class="info_server">${DETAIL.serverId}</label>
        <label class="info_level">${DETAIL.level}</label>
        <label class="info_job">${DETAIL.jobGrowName}</label>
</div>
<table>
    <tr>
        <th>분류</th>
        <th>타입</th>
        <th>세부타입</th>
        <th>이름</th>
        <th>레어리티</th>
        <th>세트이름</th>
        <th>등급</th>
        <th>착용레벨</th>
    </tr>
<c:forEach var="EQUIP" items="${EQUIP}">
    <tr>
        <td>${EQUIP.slotName}</td>
        <td>${EQUIP.itemType}</td>
        <td>${EQUIP.itemTypeDetail}</td>
        <td>${EQUIP.itemName}</td>
        <c:if test="${EQUIP.itemRarity eq '에픽'}">
        <td style="color: rgba(236, 197, 24, 1)">${EQUIP.itemRarity}</td>
        </c:if>
        <c:if test="${EQUIP.itemRarity eq '신화'}">
            <td style="color: hotpink">${EQUIP.itemRarity}</td>
        </c:if>
        <c:if test="${EQUIP.itemRarity eq '레어'}">
            <td style="color: skyblue">${EQUIP.itemRarity}</td>
        </c:if>
        <td>${EQUIP.setItemName}</td>
        <td>${EQUIP.itemGradeName}</td>
        <td>${EQUIP.itemAvailableLevel}</td>
    </tr>
</c:forEach>
</table>
</body>