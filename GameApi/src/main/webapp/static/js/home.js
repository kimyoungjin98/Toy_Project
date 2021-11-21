const doc = document
const input = doc.querySelector("input.main_input")
const select = doc.querySelector("select.main_select")

const cors_url = "https://cors-anywhere.herokuapp.com/"
const serverId_url = "https://api.neople.co.kr/df/servers?apikey=wv7TRdYKkynYMEHJEPVhxrCQUlbZJ2pA"

doc.querySelector("div.input_div").addEventListener("click", (e)=>{

 const fetch_option = {
  method:"GET",
  headers:{
   "Content-Type":"application/json; charset=utf-8",
  },
}

 if(e.target.tagName === "BUTTON") {

  const select_value = select.options[select.selectedIndex].value
  const input_value = input.value
  const api = "https://api.neople.co.kr/df/servers/<serverId>/characters?characterName=<characterName>&jobId=<jobId>&jobGrowId=<jobGrowId>&limit=<limit>&wordType=<wordType>&apikey=wv7TRdYKkynYMEHJEPVhxrCQUlbZJ2pA"



   const res = fetch(cors_url+serverId_url , fetch_option)
       .then(res => res.json())
       .then((res)=>{

       })




 }

})

