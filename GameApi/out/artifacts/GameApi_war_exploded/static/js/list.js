document.querySelector("section.result_list").addEventListener("click", (e)=>{

    let tagName = e.target.tagName
    if(tagName === "IMG"){
        let characterId = e.target.closest("DIV").dataset.id
        let serverId = e.target.closest("DIV").dataset.server
        alert(characterId)
        alert(serverId)
    }

})