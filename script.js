function openPage(page){
  document.getElementById("home").style.display="none";

  document.querySelectorAll(".page").forEach(p=>{
    p.classList.add("hidden");
  });

  document.getElementById(page).classList.remove("hidden");
}

function goHome(){
  document.getElementById("home").style.display="block";

  document.querySelectorAll(".page").forEach(p=>{
    p.classList.add("hidden");
  });

  document.getElementById("payment").classList.add("hidden");
}

let selectedPlan="";

function buy(plan){
  selectedPlan=plan;
  document.getElementById("payment").classList.remove("hidden");
}

function done(){
  let username=document.getElementById("insta").value;

  if(username===""){
    alert("Enter Instagram ID");
    return;
  }

  let phone="917695990053";
  let msg=`Hi, Payment done ✅\nPlan: ${selectedPlan}\nID: ${username}`;

  window.location.href=`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

/* LIVE COUNTER */
setInterval(()=>{
  let num=Math.floor(Math.random()*200)+100;
  document.getElementById("liveCount").innerText=num;
},2000);
