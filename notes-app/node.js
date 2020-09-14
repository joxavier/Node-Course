const fs = require ('fs')

const getNotes = function () {
    return "My cock"
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
    }

    console.log(notes)

    saveNotes(notes)
}

const removeNote = function(title){
    console.log("removing [", title, "]")
    const notes = loadNotes()

    const newNotes = notes.filter(function(note){
        return note.title !== title
    })

    if (newNotes.length == notes.length){
        console.log("No notes were deleted,", title ,"does not exsist.")
    }
    else{
        console.log(notes.length- newNotes.length, "note(s) were removed.")
        saveNotes(newNotes)
    }

    
}

const saveNotes = function (notes){
    const JSONdata = JSON.stringify(notes)
    fs.writeFileSync('notes.JSON', JSONdata)
}

const loadNotes = function (){
    try {
        const dataBuffer = fs.readFileSync('notes.JSON')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }

}
module.exports = {
    getNotes: getNotes,
    addNotes: addNote,
    removeNote: removeNote
}