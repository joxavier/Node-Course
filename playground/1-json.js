const fs = require('fs')

// const book = {
//     title: 'Josh',
//     author: "Dick"
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData)

// fs.writeFileSync('test.JSON', bookJSON)

const dataBuffer = fs.readFileSync('test.JSON')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Joshua"
data.age = 27

console.log(data.name, data.age)

const writeBuffer = JSON.stringify(data)
fs.writeFileSync('test.JSON', writeBuffer)