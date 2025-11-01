import {Book,Issue,Bookshelf} from "./data-model"


const bookCatalogue: Book[] = [];

bookCatalogue[0] = {
    id: 1,
    cover: "01.png",
    title: "Gödel, Escher, Bach. Un'eterna ghirlanda brillante.",
    author: "Douglas Hofstadter"
}

bookCatalogue[1] = {
    id: 2,
    cover: "02.png",
    title: "L'ottava vita (per Brilka)",
    author: "Nino Haratischwili"
};

bookCatalogue[2] = {
    id: 3,
    cover: "03.png",
    title: "Sabbia nera",
    author: "Cristina Cassar Scalia"
};

bookCatalogue[3] = {
    id: 4,
    cover: "04.png",
    title: "Yumi and the Nightmare Painter: A Cosmere Novel",
    author: "Brandon Sanderson"
};

bookCatalogue[4] = {
    id: 5,
    cover: "05.png",
    title: "The Dragon Reborn: Book Three of The Wheel of Time",
    author: "Robert Jordan"
};

bookCatalogue[5] = {
    id: 6,
    cover: "06.png",
    title: "The Great Hunt: Book Two of The Wheel of Time",
    author: "Robert Jordan"
};
bookCatalogue[6] = {
    id: 7,
    cover: "07.png",
    title: "The Eye of the World: Book One of The Wheel of Time",
    author: "Robert Jordan"
};
bookCatalogue[7] = {
    id: 8,
    cover: "08.png",
    title: "Pedagogia degli oppressi",
    author: "Paulo Freire"
};

bookCatalogue[8] = {
    id: 9,
    cover: "09.png",
    title: "Emily Wilde's Encyclopaedia of Faeries",
    author: "Heather Fawcett"
};

bookCatalogue[9] = {
    id: 10,
    cover: "10.png",
    title: "Pista nera",
    author: "Antonio Manzini"
};

bookCatalogue[10] = {
    id: 11,
    cover: "11.png",
    title: "Fondazione - Il ciclo completo",
    author: "Isaac Asimov"
};

bookCatalogue[11] = {
    id: 12,
    cover: "12.png",
    title: "Flatlandia",
    author: "Edwin A. Abbott"
};

bookCatalogue[12] = {
    id: 13,
    cover: "13.png",
    title: "La cura Schopenhauer",
    author: "Irvin Yalom"
};


bookCatalogue[13] = {
    id: 14,
    cover: "15.png",
    title: "Harry Potter and the Philosopher's stone",
    author: "J.K. Rowling"
}

bookCatalogue[14] = {
    id: 15,
    cover: "16.png",
    title: "The Hero with a Thousand Faces",
    author: "Joseph Campbell"
}

bookCatalogue[15] = {
    id: 16,
    cover: "17.png",
    title: "La famosa invasione degli orsi in Sicilia",
    author: "Dino Buzzati"
}

bookCatalogue[16] = {
    id: 17,
    cover: "18.png",
    title: "Coraline",
    author: "Neil Gaiman"
}

bookCatalogue[17] = {
    id: 18,
    cover: "19.png",
    title: "Orgoglio e pregiudizio",
    author: "Jane Austen"
}

function findBookById(bookId:number) {
    return bookCatalogue.find(b => b.id === bookId);

}
const issuedBooks:Issue[] = [];

issuedBooks[0] = {
    transaction: "0000-0000",
    issue: "1-1",
    bookId: 1
}

issuedBooks[1] = {
    transaction: "0000-0021",
    issue: "1-2",
    bookId: 2
}

issuedBooks[2] = {
    transaction: "0000-000E",
    issue: "1-3",
    bookId: 3
}

issuedBooks[3] = {
    transaction: "0000-0015",
    issue: "1-4",
    bookId: 4
}

issuedBooks[4] = {
    transaction: "0000-00A4",
    issue: "1-5",
    bookId: 5
}

issuedBooks[5] = {
    transaction: "0000-00B3",
    issue: "1-6",
    bookId: 6
}

issuedBooks[6] = {
    transaction: "0000-0006",
    issue: "1-7",
    bookId: 7
}

issuedBooks[7] = {
    transaction: "0000-00C0",
    issue: "1-8",
    bookId: 8
}

issuedBooks[8] = {
    transaction: "0000-0023",
    issue: "1-9",
    bookId: 9
}

issuedBooks[9] = {
    transaction: "0000-00A9",
    issue: "1-10",
    bookId: 10
}

issuedBooks[10] = {
    transaction: "0000-000A",
    issue: "1-11",
    bookId: 11
}

issuedBooks[11] = {
    transaction: "0000-0048",
    issue: "1-12",
    bookId: 12
}

issuedBooks[12] = {
    transaction: "0000-00AC",
    issue: "1-13",
    bookId: 13
}

issuedBooks[13] = {
    transaction: "0000-00DA",
    issue: "2-4",
    bookId: 4
}

issuedBooks[14] = {
    transaction: "0000-003E",
    issue: "2-11",
    bookId: 11
}

issuedBooks[15] = {
    transaction: "0000-0015",
    issue: "1-14",
    bookId: 14
}

issuedBooks[16] = {
    transaction: "0000-0010",
    issue: "1-15",
    bookId: 15
}

issuedBooks[17] = {
    transaction: "0000-001F",
    issue: "1-16",
    bookId: 16
}

issuedBooks[18] = {
    transaction: "0000-0062",
    issue: "1-17",
    bookId: 17
}

issuedBooks[19] = {
    transaction: "0000-0019",
    issue: "1-18",
    bookId: 18
}

issuedBooks[20] = {
    transaction: "0000-00E4",
    issue: "2-10",
    bookId: 10
}

function findBookByIssue(issueId:string): Book | undefined {
    const issue = issuedBooks.find(data => data.issue === issueId);
    if (issue !== undefined) {
        return findBookById(issue.bookId);
    }
    return undefined;
}

const userBookshelves:{[key:string]:Bookshelf}= {};

userBookshelves["Claudia"] = new Bookshelf("Claudia");
userBookshelves["Claudia"].addOwnedBook("1-5");
userBookshelves["Claudia"].addOwnedBook("1-9");
userBookshelves["Claudia"].addOwnedBook("1-7");
userBookshelves["Claudia"].addOwnedBook("1-1");
userBookshelves["Claudia"].addOwnedBook("1-6");
userBookshelves["Claudia"].addOwnedBook("1-3");
userBookshelves["Claudia"].addOwnedBook("1-4");

userBookshelves["Claudia"].borrowBook("1-2", "12/11/24", "Ellen");
userBookshelves["Claudia"].borrowBook("1-8", "5/12/24", "Giorgjo");
userBookshelves["Claudia"].lendBook("1-9", "5/10/24", "Paola");
userBookshelves["Claudia"].lendBook("1-3", "19/10/24", "Antonio");


userBookshelves["Claudia"].addCollection("Wheel of Time - serie",["1-7","1-6","1-5"]);
userBookshelves["Claudia"].addCollection("Letture estate 2024",["1-3","1-4","1-9"]);


userBookshelves["Antonio"] = new Bookshelf("Antonio");
userBookshelves["Antonio"].addOwnedBook("1-13");
userBookshelves["Antonio"].addOwnedBook("1-12");
userBookshelves["Antonio"].addOwnedBook("1-11");
userBookshelves["Antonio"].addOwnedBook("1-10");

userBookshelves["Antonio"].borrowBook("1-3", "19/10/24", "Claudia");
userBookshelves["Antonio"].lendBook("1-11", "8/10/24", "Andrea");

userBookshelves["Andrea"] = new Bookshelf("Andrea");
userBookshelves["Andrea"].addOwnedBook("2-10");
userBookshelves["Andrea"].addOwnedBook("1-14");
userBookshelves["Andrea"].borrowBook("1-11", "8/10/24", "Antonio");


userBookshelves["Ellen"] = new Bookshelf("Ellen");
userBookshelves["Ellen"].addOwnedBook("1-2");
userBookshelves["Ellen"].addOwnedBook("2-11");
userBookshelves["Ellen"].addOwnedBook("1-15");
userBookshelves["Ellen"].lendBook("1-2", "12/11/24", "Claudia");
userBookshelves["Ellen"].borrowBook("1-17", "23/11/24", "Giorgio");

userBookshelves["Giorgio"] = new Bookshelf("Giorgio");
userBookshelves["Giorgio"].addOwnedBook("1-16");
userBookshelves["Giorgio"].addOwnedBook("1-17");
userBookshelves["Giorgio"].addOwnedBook("1-18");
userBookshelves["Giorgio"].addOwnedBook("1-8");
userBookshelves["Giorgio"].lendBook("1-17", "23/11/24", "Ellen");
userBookshelves["Giorgio"].lendBook("1-8", "23/11/24", "Claudia");


userBookshelves["Paola"] = new Bookshelf("Paola");
userBookshelves["Paola"].addOwnedBook("2-4");
userBookshelves["Paola"].borrowBook("1-9", "5/10/24", "Claudia");

function getBookshelfByOwner(owner:string):Bookshelf | undefined {
    return userBookshelves[owner];
}



