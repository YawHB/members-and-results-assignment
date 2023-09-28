import { showMembers } from "./script.js";
function construct(list, container, itemRenderer) {
    const listRenderer = {
        render() {
            for (const item of list) {
                const html = /*html*/ `
        <tr>
            <td>${item.name()}</td>
            <td>${item._active ? "Yes" : "No"}</td>
            <td>${item._birthday}</td>
            <td>${item.age()}</td>
            <td>${item.isSenior() ? "Senior" : "Junior"}</td>
        </tr>
        
        `;

                document
                    .querySelector(`#${container} tbody`)
                    .insertAdjacentHTML("beforeend", html);
            }
        },
    };
    return listRenderer;
}

export { construct };
