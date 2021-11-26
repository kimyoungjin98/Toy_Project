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

        const input_value = input.value;
        const select_value = select.options[select.selectedIndex].value
        doc.getElementById("serverId").setAttribute("value" , select_value)

        if (!input_value) {
            alert("닉네임을 입력하세요 !!")
            return false
        } else {
            form.submit();
        }

    }

})

