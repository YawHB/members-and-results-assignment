import { initTabs } from "./tabs.js";
import * as members from "./members.js";
import * as results from "./results.js";

window.addEventListener("load", initApp);

let membersFixed = [];

async function initApp() {
    initTabs();

    const membersJson = await getData("members.json");
    membersFixed = membersToObjects(membersJson);
    showMembers(membersFixed);

    const resultsJson = await getData("results.json");
    const resultsFixed = resultsToObjects(resultsJson);
    showResults(resultsFixed);

}

async function getData(jsonData) {
    const res = await fetch(`./data/${jsonData}`);
    return res.json();
}

function membersToObjects(membersJson) {
    const fixedMembers = [];

    for (const memberJson of membersJson) {
        const memberObj = members.construct(memberJson);
        fixedMembers.push(memberObj);
    }
    return fixedMembers;
}

function showMembers(members) {
    for (const member of members) {
        insertMemberRow(member);
    }
    function insertMemberRow(member) {
        const html = /*html*/ `
        <tr>
          <td>${member.name()}</td>
          <td>${member._active ? "Yes" : "No"}</td>
          <td>${member._birthday}</td>
          <td>${member.age()}</td>
          <td>${member.isSenior() ? "Senior" : "Junior"}</td>
        </tr>
    
    `;

        document
            .querySelector("#members tbody")
            .insertAdjacentHTML("beforeend", html);
    }
}

function resultsToObjects(resultsJson) {
    const fixedResults = [];

    for (const resultJson of resultsJson) {
        const resultObj = results.construct(resultJson);
        fixedResults.push(resultObj);
    }
    return fixedResults;
}

function showResults(results) {
    results.sort((a, b) => a.timeToMilliseconds() - b.timeToMilliseconds());

    for (const result of results) {
        if (!result._member) continue;

        insertResultRow(result);
    }

    function insertResultRow(result) {
        const html = /*html*/ `
        <tr>
          <td>${convertDate(result._date)}</td>
          <td>${result._member?.name()}</td>
          <td>${showDiscipline(result._discipline)}</td>
          <td>${showType(result._resultType)}</td>
          <td>${result._time}</td>
        </tr>
        `;

        document
            .querySelector("#results tbody")
            .insertAdjacentHTML("beforeend", html);
    }
}

function showDiscipline(discipline) {
    const disciplinesInDk = {
        breaststroke: "bryst",
        butterfly: "sommerfugl",
        backstroke: "ryg",
        freestyle: "fristil",
        crawl: "kravle",
    };

    return disciplinesInDk[discipline];
}

function showType(resultType) {
    const resultTypesDk = {
        competition: "stævne",
        training: "træning",
    };

    return resultTypesDk[resultType];
}

function convertDate(dateValue) {
    const date = new Date(dateValue);

    return date.toLocaleString("da", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

function findMemberById(id) {
    const memberFound = membersFixed.find(member => member._id === id);
    // console.log(memberFound);
    return memberFound;
}

export { findMemberById };
