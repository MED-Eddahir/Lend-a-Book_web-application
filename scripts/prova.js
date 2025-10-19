import {theRequestManager, utilityFormatDate} from "./request-model.js";

const now = new Date();
const months2 = new Date();
months2.setMonth(now.getMonth() + 2);
const months1 = new Date();
months1.setMonth(now.getMonth() + 1);
const days15 = new Date();
days15.setHours(now.getHours() + 15*24);

const ptoC = theRequestManager.addRequest("1-7", "Paola", "Claudia", utilityFormatDate(months2));
theRequestManager.addRequest("1-4", "Andrea", "Claudia", utilityFormatDate(months1));
const etoC = theRequestManager.addRequest("1-4", "Ellen", "Claudia", utilityFormatDate(days15));
theRequestManager.addRequest("1-16", "Paola", "Giorgio", utilityFormatDate(months1));

console.log(theRequestManager.getRequests());

console.log(theRequestManager.getRequests("Claudia"));
console.log(theRequestManager.getRequests(undefined, "Paola"));
console.log(theRequestManager.getRequests("Claudia", "Paola"));

theRequestManager.acceptRequest(etoC);
theRequestManager.rejectRequest(ptoC);
console.log(theRequestManager.getRequests());