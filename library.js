let lib=[
    {"bookid":1003,"bookname":"Harry potter and the goblet of fire","author":"J.K Rowling","cost":900
    },
    {
    "bookid":1004,"bookname":"The secret","author":"Rhonda Byrne","cost":400
    },
    {
        "bookid":1005,
        "bookname":"Alchemist",
        "author":"Paul Coelho",
        "cost":300
    },
    {
        "bookid":1006,
        "bookname":"Ikigai",
        "author":"Francesc Miralles",
        "cost":250
    },
    {
        "bookid":1007,
        "bookname":"Rich Dad Poor Dad",
        "author":"Robert Kiyosaki",
        "cost":200
    }
];

function returnBookDataById(num){
    let book=lib.find(book=>book.bookid==num);
    if(book==undefined)
    return null;
    else
    return book;
}

function mapallbookids(){
    let result = lib.map(a=>a.bookid);
    return result;
}

module.exports={
    returnBookDataById,
    mapallbookids
}