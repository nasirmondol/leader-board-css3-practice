const numbers = [10, 9, 18, 90, 25, 78, 55, 89, 100]
const sortedNumber = numbers.sort(function (a, b){
    return a-b;
});
// console.log(sortedNumber);

const jsBooks = ['Eloquent javascript', 'Javascript j query', 'Head first javascript programming', 'A smart way to learn', 'Now playing js', 'Learn visully', 'Learning web design', 'Effective javascript']
const searching = 'javascript';
const book = [];
for(const jsBook of jsBooks){
    if(jsBook.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        book.push(jsBook)
    }
}
console.log(book)