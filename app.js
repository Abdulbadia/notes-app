// Modules (functionalites which u can use it in app)
// Core module
// fs --> file system
// terminal --> new terminal
// node nameoffile.js

// const fs = require('fs')
// fs.writeFileSync('notes.txt','Hellooo ')

// console.log(fs.readFileSync('notes.txt').toString())

// //appendFileSync
// fs.appendFileSync('notes.txt',' omar ')
// console.log(fs.readFileSync('notes.txt').toString())
////C:\Program Files\Git\bin\
//C:\Program Files\Git\cmd\


// //////////////////////////////////////////////////////////////////////////////////

// // 2 modules
// // Our own module
// const x = require('./data')
// // console.log(x)
// console.log(x.lName)
// console.log(x.sum(5,5))

// ///////////////////////////////////////////////////////////////////////////////

// // 3
// /**
//  * NPM (Node package manger)
//  * npm init -y (intalize)  // start of project
//  * npm i nameofpacakge --> npm i validator
//  * npm i --> retrive node_modules
//  */

// const validator = require('validator')
// console.log(validator.isEmail('osama@gmail.com'))  //false

/////////////////////////////////////////////////////////////////////////////

// process.argv (parse key value)
// console.log(process.argv)
// add --> console.log('Add item')
// remove --> remove Item
// error

// const command = process.argv[2]

// if(command === 'add'){
//     console.log('Add item')
// }
// else if(command === 'remove'){
//     console.log('Remove Item')
// }
// else {
//     console.log('Error')
// }
//////////////////////////////////////////////////////////////////////////////

// Yargs --> npm i yargs

const yargs = require('yargs')

// Version 1
// yargs.command({
//     command:'add',
//     describe:'Add note',
//     handler:()=>{
//         console.log('Add note')
//     }
// })

// yargs.command({
//     command:'delete',
//     describe:'Delete note',
//     handler:()=>{
//         console.log('Delete note')
//     }
// })

// // read 
// yargs.command({
//     command:'read',
//     describe:'Read note',
//     handler:()=>{
//         console.log('Read note')
//     }
// })
// // list 

// yargs.command({
//     command:'list',
//     describe:'List note',
//     handler:()=>{
//         console.log('List note')
//     }
// })

//////////////////////////////////////////////////////////////////////////////
// node app.js add --title="new1" --body="body1"
// Version 2
// yargs.command({
//     command:'add',
//     describe:'Add note',
//     // options command deal with
//     builder:{
//         title:{
//             describe:'This is title description in add command',
//             type:'string',
//             demandOption:true
//         },
//         body:{
//             describe:'This is body description in add command',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler:()=>{
//         console.log('Add note')
//     }
// })

// yargs.command({
//     command:'delete',
//     describe:'Delete note',
//     builder:{
//         title:{
//             describe:'This is body description in delete command',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler:()=>{
//         console.log('Delete note')
//     }
// })

// // read 
// yargs.command({
//     command:'read',
//     describe:'Read note',
//     builder:{
//         title:{
//             describe:'This is body description in read command',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler:()=>{
//         console.log('Read note')
//     }
// })
// // list 

// yargs.command({
//     command:'list',
//     describe:'List note',
//     handler:()=>{
//         console.log('List note')
//     }
// })

// console.log(yargs.argv)

////////////////////////////////////////////////////////////////////////////////

// Trials.js

///////////////////////////////////////////////////////////////////////////////

// Version 3

const notes = require('./notes')
yargs.command({
    command:'add',
    describe:'Add note',
    // options command deal with
    builder:{
        title:{
            describe:'This is title description in add command',
            type:'string',
            demandOption:true
        },
        body:{
            describe:'This is body description in add command',
            demandOption:true,
            type:'string'
        }
    },
    handler:(x)=>{
        // console.log(x.title)
        // console.log(yargs.argv.title)
      notes.addNote(x.title,x.body)
    }
})

yargs.command({
    command:'delete',
    describe:'Delete note',
    builder:{
        title:{
            describe:'This is body description in delete command',
            demandOption:true,
            type:'string'
        }
    },
    handler:(x)=>{
             notes.removeNotes(x.title)    
            }
})

// read 
yargs.command({
    command:'read',
    describe:'Read note',
    builder:{
        title:{
            describe:'This is body description in read command',
            demandOption:true,
            type:'string'
        }
    },
    handler:(x)=>{
        notes.readNotes(x.title)
    }
})
// list 

yargs.command({
    command:'list',
    describe:'List note',
    handler:()=>{
        console.log('List note')
    }
})

yargs.parse()
// console.log(yargs.argv)
