const doc = document
const input = doc.querySelector("input.main_input")
const select = doc.querySelector("select.main_select")

const cors_url = "https://cors-anywhere.herokuapp.com/"
const serverId_url = "https://api.neople.co.kr/df/servers?apikey=wv7TRdYKkynYMEHJEPVhxrCQUlbZJ2pA"

doc.querySelector("div.input_div").addEventListener("click", (e)=> {

    const fetch_option = {
        method: "GET",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    }

    if (e.target.tagName === "BUTTON") {

        const select_value = select.options[select.selectedIndex].value;

        fetch(cors_url + serverId_url, fetch_option)
            .then(res => res.json())
            .then(res => {

                let array = new Array()
                res.rows.map((server) => {
                    let obj = new Object()
                    obj.serverId = server.serverId
                    obj.serverName = server.serverName
                    array.push(obj)
                })

                const serverId = array.filter((server)=>{
                    return server.serverName == select_value ? server.serverId : "all"
                })

                console.log(serverId)
            })




        const input_value = input.value;
        if (!input_value) {
            alert("닉네임을 입력하세요 !!")
            return false
        }

    }

})

