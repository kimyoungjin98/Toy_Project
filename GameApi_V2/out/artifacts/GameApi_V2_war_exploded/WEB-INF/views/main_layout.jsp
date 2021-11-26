<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="rootPath" value="${pageContext.request.contextPath}"/>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dnf API</title>
</head>
<link rel="stylesheet" href="${rootPath}/static/css/main.css?ver=2">
<link rel="stylesheet" href="${rootPath}/static/css/home.css?ver=1">
<link rel="stylesheet" href="${rootPath}/static/css/list.css?ver=2">
<body>
    <tiles:insertAttribute name="nav"/>
    <tiles:insertAttribute name="header"/>
    <section class="content">
        <tiles:insertAttribute name="content"/>
    </section>
    <tiles:insertAttribute name="footer"/>
</body>
<script src="${rootPath}/static/js/nav.js"></script>
</html>
