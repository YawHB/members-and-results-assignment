import { initTabs } from "./tabs.js";
import * as members from "./members.js";

window.addEventListener("load", initApp);

async function initApp() {
    initTabs();

    // TODO: Make the rest of the program ...

    const membersJson = await getMembers();
    const membersFixed = membersToObjects(membersJson);
    console.log(membersFixed);
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
    return fixedMembers
}
