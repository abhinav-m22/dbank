import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function(){
  // alert("Finished Loading");
  // const currentAmount = await dbank.checkBalance();
  // document.getElementById("value").innerText = currentAmount;
  // document.getElementById("value").innerText = Math.round(currentAmount*100)/100;
  update();
});

document.querySelector("form").addEventListener("submit", async function(event){
  event.preventDefault();
  // alert('submitted');

  const button = event.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawl-amount").value);

  button.setAttribute("disabled", true);

  if(document.getElementById("input-amount").value.length != 0){
    await dbank.topUp(inputAmount);
  }

  if(document.getElementById("withdrawl-amount").value.length != 0){
    await dbank.withdrawl(outputAmount);
  }

  await dbank.compound();

  update();

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawl-amount").value = "";
  button.removeAttribute("disabled");

});

async function update(){
  const currentAmount = await dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount*100)/100;
}