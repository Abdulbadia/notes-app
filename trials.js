const car = {
    name:'BMW',
    color:'Black'
}
console.log(car)
console.log(car.name)

// Object --> json (stringfy)
const carJson = JSON.stringify(car)
console.log(carJson)
console.log(carJson.name) // undefined I cannot access json

// Json --> object (parse)

const carObject = JSON.parse(carJson)
console.log(carObject)
//////////////////////////////////////////////////////////////////////////////

const fs = require('fs')
fs.writeFileSync('test.json',carJson)

const data = fs.readFileSync('test.json').toString()
console.log(data)

////////////////////////////////////////////////////////////////////////////////

// Task 
/**
 * create new object person name age
 * change object --> json
 * writeFileSync --> json
 * read data (json)
 * json --> object 
 * change data
 * object --> json
 * save data writeFileSync
 */

const person = {
    name:'Osama',
    age:30
}

const personJson = JSON.stringify(person)
fs.writeFileSync('person.json',personJson)

const dataFile = fs.readFileSync('person.json').toString()  // json

const obj = JSON.parse(dataFile)
obj.name = 'ismail'
obj.age = 50

const userJson = JSON.stringify(obj)

fs.writeFileSync('person.json',userJson)
