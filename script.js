// Hämta HTML-element
const checkbox = document.getElementById('divStyle'); // Checkbox för att ändra stil
const colorInput = document.getElementById('color'); // Textfält för att välja bakgrundsfärg
const contentInput = document.getElementById('content'); // Textfält för att mata in text
const actionButton = document.getElementById('actionButton'); // Knapp för att återställa
const outputDiv = document.getElementById('outputDiv'); // Visar text och stiländringar

// Funktion för att hantera textfältens värde och uppdatera div-innehållet
function handleInputChange(event) {
    console.log("Event target:", event.target); // Loggar elementet som triggat eventet
    const name = event.target.name; // Hämtar attributet "name"
    const value = event.target.value; // Hämtar värdet från textfältet

    if (name === "content") {
        outputDiv.textContent = value || "Feel free"; // Uppdaterar text i div
    }
}

// Lyssnare för textinput, uppdaterar innehållet dynamiskt
contentInput.addEventListener('input', handleInputChange);

// Lyssnare för checkbox, ändrar bakgrundsfärg baserat på checkbox-status
checkbox.addEventListener('change', (e) => {
    if (checkbox.checked) {
        const colorValue = colorInput.value.trim(); // Hämtar färgvärde
        outputDiv.style.backgroundColor = colorValue || "white"; // Sätter bakgrundsfärg
        outputDiv.style.color = "white"; // Sätter textfärg
    } else {
        outputDiv.style.backgroundColor = "white"; // Återställer bakgrundsfärg
        outputDiv.style.color = "white"; // Återställer textfärg
    }
});

// Lyssnare för knappen, återställer alla värden och rensar innehåll
actionButton.addEventListener('click', (e) => {
    outputDiv.textContent = ""; // Rensar textinnehåll
    outputDiv.style.backgroundColor = ""; // Återställer bakgrundsfärg
    outputDiv.style.color = ""; // Återställer textfärg
    contentInput.value = ""; // Rensar textfält
    colorInput.value = ""; // Rensar färgfält
    checkbox.checked = false; // Avmarkerar checkbox
});
