const fs = require('fs')

// addNote

const addNote = (title,body) =>{
    const notes = loadNotes() // []  //  [{title:"test",body:"body"}]
    console.log(notes)
    const duplicatetital=notes.filter((note) =>{
        return note.title ===title;
    })
    console.log(duplicatetital)
if (duplicatetital.length ===0) {
    notes.push({   
        // [{title:'test',body:'new'}] ,  [{title:"test",body:"body"},{{title:"test1",body:"body1"}}]
        title,
        body
    })
    saveNotes(notes)
    console.log('saveNotes')
}else{
    console.log("Error duplicatetital")
}

}
   
const loadNotes = () =>{
    try{
        // [{"title":"test","body":"body"}]
    const dataBuffer = fs.readFileSync('notes.json').toString() // json
    // [{title:"test",body:"body"}]
    return JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
}

const saveNotes = (notes) =>{
    console.log(notes)
    // [{title:'test',body:'new'}] --> [{"title":'test',"body":'new'}]
    //  [{"title":"test","body":"body"},{{"title":"test1","body":"body1"}}]
    const saveData = JSON.stringify(notes)
    console.log(saveData)
    fs.writeFileSync('notes.json',saveData)
}

const removeNotes= (title)=>{
    const notes =loadNotes()
    const notestoKeep =notes.filter((note)=>{
        return note.title !== title
    })
    console.log(notestoKeep)
    saveNotes(notestoKeep)
    console.log('delete successfully')
}


const readNotes = (title)=>{
    const notes =loadNotes()
    const readeNotes = notes.filter((note)=>{
        return note.title ===title
    })
    if (readeNotes){
        console.log(readeNotes.body)
    }else{
        console.log('no notes found')
    }
    console.log(readeNotes)
}

const lisNotes = ()=>{
const notes =loadNotes()

}









module.exports = {
    addNote,
    removeNotes,
    readNotes
}