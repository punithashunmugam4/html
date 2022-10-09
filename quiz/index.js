const res=document.getElementById("result");

var correct=0;
var total=3;

const a1=document.getElementById("a1");
a1.addEventListener('click',()=>{
    correct++;
})

const a2=document.getElementById("a2");
a2.addEventListener('click',()=>{
    correct++;
})

const d3=document.getElementById("d3");
d3.addEventListener('click',()=>{
    correct++;
})

const submit=document.querySelector("button");
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    res.innerHTML=`Correct Answer:${correct}/${total}`;
})
