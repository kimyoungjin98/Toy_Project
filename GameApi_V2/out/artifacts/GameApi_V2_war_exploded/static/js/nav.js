document.querySelector("nav.main_nav").addEventListener("click", (e)=>{

    if(e.target.tagName === "LI"){

        let text =  e.target.textContent
        let href = "/api/"
        if(text === "Document"){
            alert("준비중인 기능입니다!")
            return false;
        }
        document.location.href = href

    }

})