const nam=document.getElementById('name');
const mail=document.getElementById('email');
const num=document.getElementById('contact');
const btn=document.getElementById('submit');
const para=document.getElementById('content');
const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
e.preventDefault();
    para.innerHTML=`<p>Name:${nam.value}</p><p>Email:${mail.value}</p><p>Contact No:${num.value}</p>`
})
