<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="rootPath" value="${pageContext.request.contextPath}"/>
<html>
<body>
<section class="result_list">
<c:forEach var="CHAR" items="${CHAR}">
<div class="list_div" data-id="${CHAR.characterId}" data-server="${CHAR.serverId}">
    <img src="${CHAR.img}">
        <label class="name">${CHAR.characterName}</label>
        <label class="server">${CHAR.serverId}</label>
        <label class="level">${CHAR.level}</label>
        <label class="job">${CHAR.jobGrowName}</label>
</div>
</c:forEach>
</section>
</body>
<script src="${rootPath}/static/js/list.js"></script>
</html>