const input=document.getElementById('notes');
const save=document.getElementById('btn');
const result=document.getElementById('content');
const form=document.getElementById('add-note');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    var newNote=input.value;
    if(newNote!==""){
    addNote(newNote);
    addToLocalStorage(newNote);
    }
})

function addNote(noteData){
    var newPara=document.createElement('div');
    newPara.classList.add('note');
    newPara.innerHTML=`<p>${noteData}</p>
    <p class="actions">
        <button class="delete" onclick="deleteNote(event)">
            <img src="delete.png">
        </button> 
    </p>`
    result.prepend(newPara);
}

function deleteNote(event){
    // console.log(event.target)
    console.log(event);
    const noteToDelete = event.target.parentElement.parentElement.parentElement
    // console.log(noteToDelete)
    noteToDelete.remove()
}

function addToLocalStorage(noteData){
    localStorage.setItem("notes",[]);
    if(localStorage.getItem('notes')){
        let note=JSON.parse(localStorage.getItem('notes'));
        note.push(noteData);
        localStorage.setItem('notes',JSON.stringify(note));
    }
    else{
        localStorage.setItem('notes',JSON.stringify([noteData]));
    }
}

window.addEventListener('DOMContentLoaded',()=>{
    let note=JSON.parse(localStorage.getItem('notes'));
    console.log(note);
   note.forEach((node)=>{
        addNote(node);
    })
})