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
<c:choose>
<c:when test="${empty EQUIP}">
    <p>정보없음</p>
</c:when>
<c:otherwise>
<table>
    <tr>
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
                <td>${EQUIP.itemType}</td>
                <td>${EQUIP.itemTypeDetail}</td>
                <c:if test="${EQUIP.itemColor eq 'hidden'}">
                <td class="hidden_color">${EQUIP.itemName}</td>
                <td class="hidden_color">${EQUIP.itemRarity}</td>
                <td class="hidden_color">${EQUIP.setItemName}</td>
                </c:if>
                <c:if test="${EQUIP.itemColor ne 'hidden'}">
                    <td style="color:${EQUIP.itemColor}">${EQUIP.itemName}</td>
                    <td style="color:${EQUIP.itemColor}">${EQUIP.itemRarity}</td>
                    <td style="color:${EQUIP.itemColor}">${EQUIP.setItemName}</td>
                </c:if>
                <td style="color:${EQUIP.gradeColor}">${EQUIP.itemGradeName}</td>
                <td>${EQUIP.itemAvailableLevel}</td>
            </tr>
</c:forEach>
    </c:otherwise>
    </c:choose>
</table>
</body>