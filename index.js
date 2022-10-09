const newNote = document.getElementById("note")
const notes = document.querySelector(".notes")
const form = document.getElementById("add-note")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    addNote(newNote.value)
})

function addNote(noteData){
    let content = document.createElement("div")
    content.classList.add("note")
    content.innerHTML = `
        <p>${noteData}</p>
        <p class="actions">
            <button class="delete" onclick="deleteNote(event)">
                <img src="delete.jpg">
            </button>
        </p>
    `
    notes.prepend(content)
    addToLocalStorage(noteData)
}

function addToLocalStorage(noteData){
    if(localStorage.getItem("notes")){
        let notesData = JSON.parse(localStorage.getItem("notes"));
        notesData.push(noteData)
        localStorage.setItem("notes",JSON.stringify(notesData))
    }else{
        localStorage.setItem("notes",JSON.stringify([noteData]))
    }
}

function deleteNote(event){
    const noteToDelete = event.target
    if(event.target.tagName == 'IMG'){
        noteToDelete = event.target.parentElement.parentElement.parentElement
        noteToDelete.remove()
    }
    else{
        noteToDelete = event.target.parentElement.parentElement
        noteToDelete.remove()
    }
    
}

window.addEventListener('DOMContentLoaded',()=>{
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes.forEach((note)=>{
        addNote(note)
    });
})