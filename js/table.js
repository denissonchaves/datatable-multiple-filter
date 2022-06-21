import { dados } from "./dados.js"
var url = dados
console.log('url', url);

async function loadIntoTable(table) {
  const tableBody = table.querySelector("tbody");
  // const response = await fetch(url);
  const response = url;
  console.log('RESPONSE', response);
  // const { rows } = await response.json();
  const rows = response['rows'];
  console.log('const', rows);


  // Clear the table
  // tableBody.innerHTML = ""

  // Populate the body
  for (const row of rows) {
    const rowElement = document.createElement("tr");

    for (const cellText of row) {
      const cellElement = document.createElement("td");

      cellElement.textContent = cellText;
      rowElement.appendChild(cellElement);
    }

    tableBody.appendChild(rowElement);
  }
}

loadIntoTable(document.querySelector("table"));