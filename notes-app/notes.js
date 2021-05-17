const fs=require('fs')
const getNotes=function() {
    return 'your notes here...'
}

const addNote=function(title,body){
    const notes=loadNotes()
    console.log('loaded notes', notes)
    // const dupNotes=notes.filter(function(note){
    //     return note.title===title
    // })
    const dupNotes=notes.filter((note)=>note.title===title)
    
    if (dupNotes.length===0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new notes added')
        
    } else {
        console.log('title taken')
    }


}

const saveNotes=function(notes){
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}
const loadNotes=function() {
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJson=dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch(e) {
        return []
    }

}


const removeNotes=function(title){
    const notes=loadNotes()
    const keepNotes=notes.filter(function(note){
        return note.title!=title
    })
    
    if(keepNotes.length<notes.length){
        saveNotes(keepNotes)
        console.log('notes removed')
    } else {
        console.log('no notes with the same title to remove')
    }
        
}

module.exports={
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
}