function memberConstruct() {
    const memberRenderer = {
        render(member) {
            const html = /*html*/ `
        <tr>
            <td>${item.name()}</td>
            <td>${item._active ? "Yes" : "No"}</td>
            <td>${item._birthday}</td>
            <td>${item.age()}</td>
            <td>${item.isSenior() ? "Senior" : "Junior"}</td>
        </tr>
        `;
            return html;
        },
    };
}
