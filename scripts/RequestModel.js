import {getBookshelfByOwner} from "./bookshelf-model.js";

export function utilityFormatDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

class RequestManager {
    constructor() {
        this.requests = [];
    }

    addRequest(issueId, from, to, dueDate) {
        const id = this.requests.length;

        const libFrom = getBookshelfByOwner(from);
        const libTo = getBookshelfByOwner(to);

        if (libFrom === undefined || libTo === undefined) return -1;
        if (!libTo.available(issueId)) return -1;

        const loanReq = {
            id: id,
            issueId: issueId,
            from: from,
            to: to,
            dueDate: dueDate,
            requestDate: utilityFormatDate(new Date())
        }

        this.requests.push(loanReq);
        return id;
    }

    rejectRequest(reqId) {
        if (this.requests[reqId] === undefined) return false;
        this.requests[reqId] = undefined;
        return true;
    }

    acceptRequest(reqId) {
        const loanReq = this.requests[reqId];
        if (loanReq === undefined) return false;

        const libFrom = getBookshelfByOwner(loanReq.from);
        const libTo = getBookshelfByOwner(loanReq.to);

        // non dovrebbe succedere ma better safe than sorry:
        if (libFrom === undefined || libTo === undefined) return false;

        libFrom.borrowBook(loanReq.issueId, loanReq.dueDate, loanReq.to);
        libTo.lendBook(loanReq.issueId, loanReq.dueDate, loanReq.from);

        for (let i = 0; i < this.requests.length; i++) {
            if (this.requests[i] !== undefined && this.requests[i].issueId === loanReq.issueId)
                this.requests[i] = undefined;
        }

        return true;
    }

    getRequests(to, from) {
        let current = this.requests.filter(val => val !== undefined);
        if (to !== undefined)
            current = current.filter(val => val.to === to);
        if (from !== undefined)
            current = current.filter(val => val.from === from);
        return current;
    }
}

export const theRequestManager = new RequestManager();