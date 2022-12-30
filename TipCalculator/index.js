const amount=document.getElementById("amount");
const percent=document.getElementById("percent");
const people=document.getElementById("people");
const tipPerPerson=document.getElementById("resultTip");
const amountPerPerson=document.getElementById("resultAmount");
const reset=document.getElementById("reset");
const custom=document.querySelector(".custom");
const customInput=document.querySelector(".customInput");

let tipPercent=0;
document.getElementById("one").addEventListener('click',()=>{
    reset.disabled=false;
   tipPercent=document.getElementById("one").value;
    // console.log(tipPercent);
    // console.log(amount.value);
    // console.log(`$${amount.value*tipPercent}`); 
   calculate(tipPercent);
})
document.getElementById("two").addEventListener('click',()=>{
    reset.disabled=false;
   tipPercent=document.getElementById("two").value;
   calculate(tipPercent);
})
document.getElementById("three").addEventListener('click',()=>{
    reset.disabled=false;
   tipPercent=document.getElementById("three").value;
   calculate(tipPercent);
})
document.getElementById("four").addEventListener('click',()=>{
    reset.disabled=false;
   tipPercent=document.getElementById("four").value;
   calculate(tipPercent);
})
document.getElementById("five").addEventListener('click',()=>{
    reset.disabled=false;
   tipPercent=document.getElementById("five").value;
   calculate(tipPercent);
})
custom.addEventListener('click',()=>{
    reset.disabled=false;
    custom.style.display="none";
    customInput.style.display="block";
})
customInput.addEventListener('input',()=>{
    tipPercent=(customInput.value/100).toFixed(2);
  calculate(tipPercent);
})

function calculate(tipPercent){
    var p;
   if(people.value==0){
       p=1;
   }
   else{
       p=people.value;
   }
   var tip =(amount.value*tipPercent/p).toFixed(2);
   tipPerPerson.innerHTML=`$${tip}`;
   amountPerPerson.innerHTML=`$${((amount.value/p)+Number(tip)).toFixed(2)}`;
}

amount.addEventListener('input',()=>{
    reset.disabled=false;
    calculate(tipPercent);
})
people.addEventListener('input',()=>{
    reset.disabled=false;
    calculate(tipPercent);
})
reset.addEventListener('click',()=>{
    tipPerPerson.innerHTML="$0.00";
    amountPerPerson.innerHTML="$0.00";
    amount.value="";
    people.value="";
    custom.style.display="inline";
    customInput.style.display="none";
    reset.disabled=true;
})