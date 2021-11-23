document.querySelector("section.result_list").addEventListener("click", (e)=>{

    let tagName = e.target.tagName
    if(tagName === "IMG"){
        let characterId = e.target.closest("DIV").dataset.id
        let serverId = e.target.closest("DIV").dataset.server

        const fetch_url = "http://localhost:8080/api/modal?serverId=" + serverId + "&characterId=" + characterId

        fetch(fetch_url)
            .then(res=>res.json())
            .then(console.log)
    }

})