const newNote = document.getElementById("note")
const notes = document.querySelector(".notes")
const form = document.getElementById("add-note")

form.addEventListener("submit",(e)=>{
    // prevents the default behaviour of the form
    e.preventDefault()
    console.log(newNote.value)
    if(newNote.value!==""){
        addToLocalStorage(newNote.value)
        addNote(newNote.value)
    }
    
})

function addNote(noteData){
    let content = document.createElement("div")
    content.classList.add("note")
    content.innerHTML = `
        <p>${noteData}</p>
        <p class="actions">
            <button class="delete" onclick="deleteNote(event)">
                <img src="delete.png">
            </button> 
        </p>
    `
    notes.prepend(content)
}
// notes : [data,data]
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
    console.log(event.target)
    const noteToDelete = event.target.parentElement.parentElement.parentElement
    console.log(noteToDelete)
    noteToDelete.remove()
}

window.addEventListener('DOMContentLoaded',()=>{
    let notesData = JSON.parse(localStorage.getItem("notes"));
    console.log(notesData)
    notesData && notesData.forEach((note)=>{
        addNote(note)
    })
})