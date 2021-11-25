<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="rootPath" value="${pageContext.request.contextPath}"/>
<html>
<body>
<section class="result_list">
    <div class="modal" onclick="onClick()"></div>
    <div class="modal_result"></div>
<c:forEach var="CHAR" items="${CHAR}">
<div class="list_div"
     data-id="${CHAR.characterId}"
     data-name="${CHAR.characterName}"
     data-server="${CHAR.serverId}">
    <img src="${CHAR.img}">
        <label class="name">${CHAR.characterName}</label>
        <label class="server">${CHAR.serverId}</label>
        <label class="level">${CHAR.level}</label>
        <label class="job">${CHAR.jobGrowName}</label>
</div>
</c:forEach>
</section>
</body>
<script type="text/javascript">
    const modal = document.querySelector(".modal")
    const modal_result = document.querySelector(".modal_result")

    // modal 백그라운드 div를 클릭할 경우 데이터를 지우고 display none
    const onClick = ()=>{
        if(modal.style.display == "flex"){
            modal.style.display = "none";
            modal_result.innerHTML = "";
            modal_result.display = "none";
        }
    }

    document.querySelector(".result_list").addEventListener("click", (e)=>{

        let tagName = e.target.tagName

        if(tagName === "IMG"){

            modal.style.display = "flex"
            modal.style.opacity = "0.5"

            let characterId = e.target.closest("DIV").dataset.id
            let characterName = e.target.closest("DIV").dataset.name
            let server = e.target.closest("DIV").dataset.server

            const equip_url = `${rootPath}/modal/equip/` + server + "/" + characterId + "/" + characterName

            fetch(equip_url)
                .then(res=>res.text())
                .then(res=>{
                    if(res != null && res != ""){
                        modal_result.innerHTML = res;
                        modal_result.style.display = "flex"
                    }
                })

        }

    })


</script>
</html>