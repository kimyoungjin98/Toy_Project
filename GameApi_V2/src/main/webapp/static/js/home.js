const doc = document
const input = doc.querySelector("input.main_input")
const select = doc.querySelector("select.main_select")
const form = doc.querySelector("form.input_form")

form.addEventListener("click", (e)=> {

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

