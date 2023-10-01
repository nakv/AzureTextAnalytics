function sendFormData() {
  const form = document.getElementById("myForm"); // Replace 'myForm' with the actual ID of your form element
  const tableBody = document.querySelector("#responseTable tbody");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const text = formData.get("text"); // Assuming your form field name is 'text'

    const data = {
      documents: [{ id: "1", text: text }],
    };

    try {
      const response = await fetch(
        "https://textfunctionapp.azurewebsites.net/api/languageDetectionFunc",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        // Process the response data as needed
        console.log(responseData);
        // Display the response on the web page
        displayResponseTable(responseData);
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    } catch (error) {
      console.error(error);
    }
  });

  function displayResponseTable(responseData) {
    tableBody.innerHTML = "";
    const documents = responseData.documents;

    for (const document of documents) {
      const detectedLanguages = document.detectedLanguages;

      for (const language of detectedLanguages) {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = document.id;

        const nameCell = document.createElement("td");
        nameCell.textContent = language.name;

        const iso6391NameCell = document.createElement("td");
        iso6391NameCell.textContent = language.iso6391Name;

        const scoreCell = document.createElement("td");
        scoreCell.textContent = language.score;

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(iso6391NameCell);
        row.appendChild(scoreCell);

        tableBody.appendChild(row);
      }
    }
  }
}
