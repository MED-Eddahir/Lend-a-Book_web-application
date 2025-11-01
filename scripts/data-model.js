"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookshelf = void 0;
class Bookshelf {
    owner;
    books = {};
    collections = {};
    constructor(owner) {
        this.owner = owner;
        this.books = {};
        this.collections = {};
    }
    addOwnedBook(issueId) {
        if (this.books[issueId] === undefined) {
            this.books[issueId] = {
                issueId: issueId,
                status: "own",
            };
            return true;
        }
        return false;
    }
    available(issueId) {
        return (this.books[issueId] !== undefined && this.books[issueId].status === "own");
    }
    lendBook(issueId, dueDate, receiver) {
        if (this.available(issueId) && this.books[issueId] !== undefined) {
            this.books[issueId].status = "lent";
            this.books[issueId].dueDate = dueDate;
            this.books[issueId].counterpart = receiver;
            return true;
        }
        return false;
    }
    borrowBook(issueId, dueDate, provider) {
        if (this.books[issueId] === undefined) {
            this.books[issueId] = {
                issueId: issueId,
                status: "borrowed",
                dueDate: dueDate,
                counterpart: provider
            };
        }
        return false;
    }
    getBooksOnShelf() {
        return Object.values(this.books);
    }
    getCollectionsOnShelf() {
        return Object.entries(this.collections);
    }
    returnBorrowed(issueId) {
        if (this.books[issueId] !== undefined && this.books[issueId].status === "borrowed") {
            delete this.books[issueId];
            return true;
        }
        return false;
    }
    retrieveLoan(issueId) {
        if (this.books[issueId] && this.books[issueId].status == "lent") {
            this.books[issueId].status = "own";
            delete this.books[issueId].dueDate;
            delete this.books[issueId].counterpart;
            return true;
        }
        return false;
    }
    addCollection(name, bulk) {
        const numbers = Object.keys(this.collections).map(collId => {
            const parts = collId.split("-");
            const lastPart = parts[parts.length - 1] ?? "";
            const n = parseInt(lastPart, 10);
            return Number.isNaN(n) ? 0 : n;
        });
        const max = numbers.reduce((oldMax, val) => (val > oldMax ? val : oldMax), 1);
        const newId = `${this.owner}-${max + 1}`;
        const books = (bulk === undefined ? [] :
            bulk.filter((issueId) => this.books[issueId] != undefined));
        if (this.collections[newId] === undefined) {
            this.collections[newId] = {
                id: newId,
                name: name,
                books: books,
            };
            return true;
        }
        return false;
    }
}
exports.Bookshelf = Bookshelf;
