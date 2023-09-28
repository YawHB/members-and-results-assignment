import { showMembers } from "./script.js";
function construct(list, container, itemRenderer) {
    console.log(list);
    const listRenderer = {
        render() {
            for (const item of list) {
                insertRow(item);
            }
            function insertRow(item) {
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
