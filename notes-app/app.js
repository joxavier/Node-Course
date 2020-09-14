const validator = require('validator')
const Nodes = require('./node.js')
const chalk = require('chalk')
const yargs = require('yargs')
 
//Change version 
yargs.version('1.1.0')



yargs.command({
    command: 'add',
    descibe: 'Add a new note',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        },

        body: {
            descibe: "Body of note",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        console.log('Title: ' + argv.title)
        console.log('\nNote: ' + argv.body)
        Nodes.addNotes(argv.title, argv.body)
    }
})


yargs.command({
    command: 'remove',
    descibe: 'Remove a new note',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        console.log('Removing a Note')
        Nodes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    descibe: 'List out all notes',
    handler: function (){
        console.log('Listing Notes')
    }
})

yargs.command({
    command: 'read',
    descibe: 'Read a note',
    handler: function (){
        console.log('Reading Note')
    }
})


yargs.parse()