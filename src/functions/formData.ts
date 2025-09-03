const form = document.getElementById("myForm");
const anteckning = document.getElementById("#anteckning");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = ""
    let note = ""
    
    for (const [key, value] of formData.entries()) {
        console.log(key + ": " + value);
    }
    const dataObject = Object.fromEntries(formData.entries()) {
        console.log("As object", String(dataObject));
        anteckning?.innerHTML = `
            <h1>${title}</h1>
            <h5>${note}</h5>
        `
    }
})