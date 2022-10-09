const tabl=document.querySelector('table');

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json();
}).then(display);

function display(data){
    var headrow=document.createElement('tr');
    var key=Object.keys(data[0]);
    for(let i=0;i<key.length;i++){
        var newcol=document.createElement('th');
        newcol.innerHTML=key[i];
        headrow.appendChild(newcol);
    }
    tabl.appendChild(headrow);
    data.forEach(element => {
        console.log(element);
        var newrow=document.createElement('tr');
       Object.keys(element).forEach((val)=>{
            console.log(element[val]);
            var newcol=document.createElement('td');
            newcol.innerHTML=element[val];
            newrow.appendChild(newcol);
        })
        tabl.appendChild(newrow);
    });
}

var add=new Promise((response,reject)=>{
  var data=  fetch('https://jsonplaceholder.typicode.com/posts');
response("success");
reject("error");

})
.then(fullfilled,rejected);

