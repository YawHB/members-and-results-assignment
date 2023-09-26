import { initTabs } from "./tabs.js";
import * as members from "./members.js";

window.addEventListener("load", initApp);

async function initApp() {
    initTabs();

    // TODO: Make the rest of the program ...

    const membersJson = await getMembers();
    const membersFixed = membersToObjects(membersJson);
    console.log(membersFixed);
    showMembers(membersFixed);
}

async function getMembers() {
    const res = await fetch("./data/members.json");
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
          <td>${member._active ? 'Yes' : 'No'}</td>
          <td>${member._birthday}</td>
          <td>${member.age()}</td>
          <td>${member.isSenior() ? "Senior" : "Junior"}</td>
        </tr>
    
    `;

        document
            .querySelector("#members")
            .insertAdjacentHTML("beforeend", html);
    }
}
