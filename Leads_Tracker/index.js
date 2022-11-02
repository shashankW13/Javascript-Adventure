const saveBtnEl = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let myLeads = [];
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
const tabsFromLocalStorage = JSON.parse(localStorage.getItem('url'))
const delBtnEl = document.getElementById('del-btn')
const tabBtn = document.getElementById('tab-btn')

saveBtnEl.addEventListener("click", saveLeads);
delBtnEl.addEventListener("dblclick", delLeads);
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
  })
})

if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

function saveLeads() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem('myLeads', JSON.stringify(myLeads))
  render(myLeads)
  console.log(leadsFromLocalStorage)
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
                    <a href='${leads[i]}' target='_blank'> 
                    ${leads[i]} 
                    </a>
                  </li>`;
  }
  ulEl.innerHTML = listItems;
}

function delLeads(){
  localStorage.clear()
  myLeads.length = 0
  render(myLeads)
  console.log(leadsFromLocalStorage)
}


  
  
