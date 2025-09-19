import { renderCollectionPage } from "./collection";

export default function () {
    document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", async () => {
            const id = btn.getAttribute("data-id");
            console.log(`Deleted: ${id}`);
            const res = await fetch(`http://127.0.0.1:3000/form/${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                renderCollectionPage();
            }
        });
    });
};