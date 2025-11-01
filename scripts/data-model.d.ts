export interface Book {
    id: number;
    cover: string;
    title: string;
    author: string;
}
export interface Issue {
    transaction: string;
    issue: string;
    bookId: number;
}
export interface BookInBookshelf {
    issueId: string;
    status: "own" | "lent" | "borrowed";
    dueDate?: string;
    counterpart?: string;
}
export interface BookCollection {
    id: string;
    name: string;
    books: string[];
}
export declare class Bookshelf {
    readonly owner: string;
    private books;
    private collections;
    constructor(owner: string);
    addOwnedBook(issueId: string): boolean;
    available(issueId: string): boolean;
    lendBook(issueId: string, dueDate: string, receiver: string): boolean;
    borrowBook(issueId: string, dueDate: string, provider: string): boolean;
    getBooksOnShelf(): BookInBookshelf[];
    getCollectionsOnShelf(): [string, BookCollection][];
    returnBorrowed(issueId: string): boolean;
    retrieveLoan(issueId: string): boolean;
    addCollection(name: string, bulk?: string[]): boolean;
}
//# sourceMappingURL=data-model.d.ts.map