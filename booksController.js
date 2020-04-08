//Import
const books = require('./books.js');

const arrLength=books.length;

//Display book titles & authors
for(let i=0; i<arrLength; i++){
    console.log("Book: " + books[i].title + "\n" + "Author: " + books[i].author + "\n")
}

//Books published by `O'Reilly Media`
for(let i=0; i<arrLength; i++)
if(books[i].publisher == "O'Reilly Media"){
    console.log("Book: " + books[i].title + "\n")
}

//Books which have more than 350 pages
for(let i=0; i<arrLength; i++)
if(books[i].pages > 350){
    console.log("Book: " + books[i].title + "\n")
}