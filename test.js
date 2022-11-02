const imgArr = [
  "Leads_Tracker/icon.png",
  "Leads_Tracker/icon.png",
  "Leads_Tracker/icon.png"
]

const divEl = document.getElementById('container')
let imgStr = ``

for(let i = 0; i < imgArr.length; i++){
  imgStr += `<img src="${imgArr[i]}">`
}

divEl.innerHTML = imgStr