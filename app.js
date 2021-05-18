const fs=require('fs');
const { demandOption } = require('yargs');
const yargs=require('yargs')
const notes=require('./notes-app/notes.js')
const log = console.log;

//console.log('variable is: ', getNotes())

//fs.appendFileSync('note.txt','Yelo third note\n')
//console.log(validator.isDate('2021-05-01'))
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list all notes',
    builder:{

    },
    handler: function(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'find',
    describe: 'find a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        }
    },
    handler: function(argv){
        notes.findNotes(argv.title)
    }
})

//dummy executor
yargs.parse()