var text=document.querySelector("#name");
var num=document.getElementById("age");
document.getElementById('submit').addEventListener('click',()=>{
    // event.preventDefault();
    document.getElementById("result").innerHTML=text.value+num.value;
})
