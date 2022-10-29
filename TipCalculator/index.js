const amount=document.getElementById("amount");
const percent=document.getElementById("percent");
const people=document.getElementById("people");
const tipPerPerson=document.getElementById("resultTip");
const amountPerPerson=document.getElementById("resultAmount");
const reset=document.getElementById("reset");
const custom=document.querySelector(".custom");
const customInput=document.querySelector(".customInput");


document.getElementById("one").addEventListener('click',()=>{
   var tipPercent=document.getElementById("one").value;
    // console.log(tipPercent);
    // console.log(amount.value);
    // console.log(`$${amount.value*tipPercent}`); 
   calculate(tipPercent);
})
document.getElementById("two").addEventListener('click',()=>{
   let tipPercent=document.getElementById("two").value;
   calculate(tipPercent);
})
document.getElementById("three").addEventListener('click',()=>{
   let tipPercent=document.getElementById("three").value;
   calculate(tipPercent);
})
document.getElementById("four").addEventListener('click',()=>{
   let tipPercent=document.getElementById("four").value;
   calculate(tipPercent);
})
document.getElementById("five").addEventListener('click',()=>{
   let tipPercent=document.getElementById("five").value;
   calculate(tipPercent);
})
custom.addEventListener('click',()=>{
    reset.disabled=false;
    custom.style.display="none";
    customInput.style.display="block";
})
customInput.addEventListener('input',()=>{
    let  tipPercent=(customInput.value/100).toFixed(2);
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
})
people.addEventListener('input',()=>{
    reset.disabled=false;
})

reset.addEventListener('click',()=>{
    tipPerPerson.innerHTML="";
    amountPerPerson.innerHTML="";
    amount.value="";
    people.value="";
    custom.style.display="inline";
    customInput.style.display="none";
})