const fs=require('fs')
const chalk=require('chalk')

const getNotes=function() {
    return 'your notes here...'
}

const addNote=function(title,body){
    const notes=loadNotes()
    console.log('loaded notes', notes)
    // const dupNotes=notes.filter(function(note){
    //     return note.title===title
    // })
    const dupNote=notes.find((note)=>note.title===title)
    
    if (!dupNote){
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

const listNotes=function(){
    const notes=loadNotes()
    notes.forEach(element => {
        console.log(element)
    });
}


const findNotes=function(title){
    const notes=loadNotes()
    const findNote=notes.find(note=>note.title==title)
    
    debugger
    
    if(findNote){
        console.log(chalk.bgGreen(findNote.title))
    } else {
        console.log(chalk.bgRed.inverse('Title not found'))
    }
}

module.exports={
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    findNotes: findNotes,
}