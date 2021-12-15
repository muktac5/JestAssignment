var books = require('./library');

test('book',() => {
    //expect (books.returnBookDataById(1001)).not.toBeNull();
    expect (books.returnBookDataById(1001)).toBeNull();
});

test('bookid',()=>{
    var testbookid=1001;
    //var testbookid=1001;
    expect(books.mapallbookids()).toContain(testbookid);
});