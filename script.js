const target=new Date('2027-05-01T00:00:00');
setInterval(()=>{
const now=new Date();
const d=target-now;
const days=Math.floor(d/86400000);
const hours=Math.floor((d%86400000)/3600000);
const mins=Math.floor((d%3600000)/60000);
document.getElementById('countdown').innerText=`${days} dies ${hours} hores ${mins} minuts`;
},1000);
