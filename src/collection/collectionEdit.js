import { renderCollectionPage } from "./collection";

export default function () {
document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");
        const newName = prompt("Edit collection name:");
        if (newName) {
            const res = await fetch(`http://127.0.0.1:3000/form/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ collection: newName })
            });
            console.log(newName);
            if (res.ok) {
                renderCollectionPage();
            }
        };
    });
})};