const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, {threshold:.18});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const message = document.getElementById("reasonMessage");
document.querySelectorAll(".reason").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".reason").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    message.textContent = btn.dataset.text;
    burst(10);
  });
});

function petal(){
  const p=document.createElement("span");
  p.className="petal"; p.textContent=Math.random()>.45?"💛":"🌼";
  p.style.left=Math.random()*100+"vw";
  p.style.setProperty("--drift",(Math.random()*180-90)+"px");
  p.style.animationDuration=(5+Math.random()*5)+"s";
  p.style.fontSize=(12+Math.random()*13)+"px";
  document.getElementById("petals").appendChild(p);
  setTimeout(()=>p.remove(),10000);
}
function burst(n=16){for(let i=0;i<n;i++)setTimeout(petal,i*90)}
setInterval(()=>petal(),1300);
burst(12);

document.getElementById("restart").addEventListener("click",()=>{
  window.scrollTo({top:0,behavior:"smooth"}); burst(24);
});
