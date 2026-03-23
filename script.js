function openPage(page){
  document.querySelector(".steps").style.display = "none";
  document.querySelector(".categories").style.display = "none";

  document.getElementById(page).classList.remove("hidden");
}

let selectedPlan = "";

function buy(plan){
  selectedPlan = plan;
  document.getElementById("payment").classList.remove("hidden");
  window.scrollTo(0, document.body.scrollHeight);
}

function done(){
  let username = document.getElementById("insta").value;

  if(username===""){
    alert("Enter Instagram ID");
    return;
  }

  let phone = "917695990053";
  let msg = `Hi, Payment done ✅\nPlan: ${selectedPlan}\nID: ${username}`;

  window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

// LIVE COUNT
setInterval(()=>{
  let num = Math.floor(Math.random()*200)+100;
  document.getElementById("liveCount").innerText = num;
},2000);
