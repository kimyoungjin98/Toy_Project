const doc = document
const input = doc.querySelector("input.main_input")
const select = doc.querySelector("select.main_select")
const form = doc.querySelector("form.input_form")

const cors_url = "https://cors-anywhere.herokuapp.com/"
const serverId_url = "https://api.neople.co.kr/df/servers?apikey=wv7TRdYKkynYMEHJEPVhxrCQUlbZJ2pA"

form.addEventListener("click", (e)=> {

    const fetch_option = {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    }

    if (e.target.tagName === "BUTTON") {

        fetch(cors_url + serverId_url, fetch_option)
            .then(res => res.json())
            .then(res => {
                res.rows.map((server) => {
                    let obj = new Object()
                    obj.serverId = server.serverId
                    obj.serverName = server.serverName

                    const select_value = select.options[select.selectedIndex].value;
                    if (select_value == obj.serverName){
                        document.querySelector("input.serverId").setAttribute("value", obj.serverId)
                        return false
                    } else {
                        document.querySelector("input.serverId").setAttribute("value", "all")
                        return false
                    }


                })
            })

        // input box 입력 값 가져오기
        const input_value = input.value;

        if (!input_value) {
            alert("닉네임을 입력하세요 !!")
            return false
        } else {
            // input box 입력된 값이 null이 아닐 경우 데이터 전송
            // form.submit();
        }

    }

})

