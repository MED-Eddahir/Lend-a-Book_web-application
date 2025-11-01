 export interface Book{
    id:number;
    cover:string;
    title:string;
    author:string;
}

 export interface Issue{
    transaction:string;
    issue:string;
    bookId:number;
}

 export interface BookInBookshelf{
    issueId:string;
    status: "own" | "lent" | "borrowed";
    dueDate?:string;
    counterpart?:string;
}

export interface BookCollection{
    id:string;
    name:string;
    books:string[];
}

 export class Bookshelf {
    readonly owner:string;
    private books: {[key:string]:BookInBookshelf} = {};
    private collections: {[key:string]:BookCollection}={}; 

    constructor(owner:string) {
        this.owner = owner;
        this.books = {};
        this.collections = {};
    }


    addOwnedBook(issueId:string):boolean{
        if (this.books[issueId] === undefined){
            this.books[issueId] = {
                issueId: issueId,
                status: "own",
            };
            return true;
        }
        return false;
    }

    available(issueId:string):boolean {
        return (this.books[issueId] !== undefined && this.books[issueId].status === "own");
    }

    lendBook(issueId:string, dueDate:string, receiver:string):boolean {
        if (this.available(issueId) && this.books[issueId] !== undefined) {
            this.books[issueId].status = "lent";
            this.books[issueId].dueDate = dueDate;
            this.books[issueId].counterpart = receiver;
            return true;
        }
        return false;
    }

    borrowBook(issueId:string, dueDate:string, provider:string) {
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

    getBooksOnShelf():BookInBookshelf[] {
        return Object.values(this.books);
    }

    getCollectionsOnShelf(){
        return Object.entries(this.collections);
    }

    returnBorrowed(issueId:string) {
    if (this.books[issueId] !== undefined && this.books[issueId].status === "borrowed") {
        delete this.books[issueId];
        return true;
    }
    return false;
}
  retrieveLoan(issueId:string){
    if(this.books[issueId] && this.books[issueId].status=="lent"){
                 this.books[issueId].status="own";
                 delete this.books[issueId].dueDate;
                  delete this.books[issueId].counterpart;
                  return true;
    }
    return false;
  }
   addCollection(name:string, bulk?:string[]):boolean{
      const numbers:number[]=Object.keys(this.collections).map(collId=>{
        const parts:string[]= collId.split("-");
        const lastPart = parts[parts.length - 1] ?? "";
        const n = parseInt(lastPart, 10);
         return Number.isNaN(n) ? 0 : n;

      });
        const max:number=numbers.reduce( (oldMax:number,val:number)=>(val>oldMax?val:oldMax),1);
        const newId=`${this.owner}-${max+1}`;

        const books:string[]=(bulk===undefined?[]:
            bulk.filter((issueId:string)=>this.books[issueId] != undefined)
        )
        if(this.collections[newId]===undefined){
            this.collections[newId]={
                id:newId,
                name:name,
                books:books,


            };
            return true;
        }
        return false;
    }


  /*  removeBookFromCollection(name, issueId) {
        if (this.collections[name]) {
            const index = this.collections[name].indexOf(issueId);
            if (index !== -1) {
                this.collections[name].splice(index, 1);
                return true;
            }
        }
        return false;
    }

    deleteCollection(name:string) {
        if (this.collections[name]) {
            delete this.collections[name];
            return true;
        }
        return false;
    }

    getCollections() {
        return Object.keys(this.collections);
    }

    */
}

