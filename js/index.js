"use strict";
const form = document.forms["my-form"];
const yearInput = form.elements.year;
const monthInput = form.elements.month;
const tableContainer = document.querySelector(".table-container");

function createCalendar(elem, year, month) {
  let table = document.createElement("table");
  elem.innerHTML = "";
  elem.append(table);
  let headDays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  let headRow = document.createElement("tr");
  for (let headDay of headDays) {
    let headCell = document.createElement("td");
    headCell.append(headDay);
    headCell.classList.add("td-elem-head");
    headRow.append(headCell);
  }
  table.prepend(headRow);
  let date = new Date(year, month - 1);
  let dateNumOdDays = new Date(year, month, 0);
  let numberOfDays = dateNumOdDays.getDate();
  let tableRow;
  for (let i = 0; i < numberOfDays; i++) {
    date.setDate(i + 1);
    if (i === 0 || date.toString().startsWith("Mo")) {
      tableRow = document.createElement("tr");
      table.append(tableRow);
      for (let i = 0; i < 7; i++) {
        let tableCell = document.createElement("td");
        tableCell.classList.add("td-elem");
        tableRow.append(tableCell);
      }
    }
    let index = headDays.findIndex(
      (day) => date.toString().toUpperCase().slice(0, 2) === day
    );

    tableRow.cells[index].append(i + 1);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  createCalendar(tableContainer, yearInput.value, monthInput.value);
});
