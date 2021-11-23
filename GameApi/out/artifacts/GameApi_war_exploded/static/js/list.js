let modal = document.querySelector("div.modal")

document.querySelector("section.result_list").addEventListener("click", (e)=>{

    modal.style.display = "flex"
    modal.style.opacity = "0.5";

    let tagName = e.target.tagName
    if(tagName === "IMG"){
        let characterId = e.target.closest("DIV").dataset.id
        let serverId = e.target.closest("DIV").dataset.server

        const equip_url = "http://localhost:8080/api/modal/equip?serverId=" + serverId + "&characterId=" + characterId
        const char_url = "http://localhost:8080/api/modal/char?serverId=" + serverId + "&characterId=" + characterId

        fetch(equip_url)
            .then(res=>res.text())
            .then(res=>{
                if(res == "OK"){
                    console.log("장비 데이터 OK")
                } else if(res == "FAIL"){
                    console.log("장비 데이터 FAIL")
                }
            })

        fetch(char_url)
            .then(res => res.text())
            .then(res=>{
                if(res == "OK"){
                    console.log("캐릭터 정보 OK")
                } else if(res == "FAIL"){
                    console.log("캐릭터 정보 FAIL")
                }
            })
    }

})

document.querySelector("div.modal").addEventListener("click", (e)=>{
    e.target.style.display = "none"
})