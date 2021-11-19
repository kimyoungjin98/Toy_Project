<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dnf API</title>
</head>
<body>
    <tiles:insertAttribute name="header"/>
    <tiles:insertAttribute name="nav"/>
    <section class="content">
        <tiles:insertAttribute name="content"/>
    </section>
    <tiles:insertAttribute name="footer"/>
</body>
</html>
