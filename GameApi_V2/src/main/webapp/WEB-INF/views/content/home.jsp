<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="rootPath" value="${pageContext.request.contextPath}"/>
<html>
<body>
<form class="input_form" action="${rootPath}/list">
<select class="main_select">
    <option value="all">전체</option>
    <option value="cain">카인</option>
    <option value="diregie">디레지에</option>
    <option value="siroco">시로코</option>
    <option value="prey">프레이</option>
    <option value="casillas">카시야스</option>
    <option value="hilder">힐더</option>
    <option value="anton">안톤</option>
    <option value="bakal">바칼</option>
</select>
    <input name="serverId" type="hidden" id="serverId"/>
    <input name="characterId" placeholder="닉네임을 입력하세요" class="main_input" />
    <button class="main_button" type="button">검색</button>
</form>
</body>
</html>
<script src="${rootPath}/static/js/home.js?ver=7"></script>
