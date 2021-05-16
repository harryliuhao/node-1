const fs=require('fs')

// const book={
//     title: 'magitech chronicles',
//     author: 'Chris Fox'
// }

// const bookJson=JSON.stringify(book)
//const parsed=JSON.parse(bookJson)
//console.log(parsed)
//console.log(book.author)
// fs.writeFileSync('json-file.json', bookJson)

const fBuffer=fs.readFileSync('json-file.json')
const dataJ=fBuffer.toString()
const data=JSON.parse(dataJ)
data.author='Megan Fox'
console.log(data.author)


const bookJson=JSON.stringify(data)
fs.writeFileSync('json-file.json',bookJson)