const doc = document
const input = doc.querySelector("input.main_input")
const select = doc.querySelector("select.main_select")


doc.querySelector("div.input_div").addEventListener("click", (e)=>{

 const fetch_option = {
  method:"POST",
  headers:{
   "Content-Type":"application/json",
   "Access-Control-Allow-Origin" : "https://localhost:8080",
   "Allow-Control-Allow Credentials" : "true"
  },
}

 if(e.target.tagName === "BUTTON") {

  fetch("http://localhost:8080/api/serverId" , fetch_option)
      .then(res=> alert(res)
  )

  const select_value = select.options[select.selectedIndex].value
  const input_value = input.value
  const api = "https://api.neople.co.kr/df/servers/<serverId>/characters?characterName=<characterName>&jobId=<jobId>&jobGrowId=<jobGrowId>&limit=<limit>&wordType=<wordType>&apikey=wv7TRdYKkynYMEHJEPVhxrCQUlbZJ2pA"

 }

})

