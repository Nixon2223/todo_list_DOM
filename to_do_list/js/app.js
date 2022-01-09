document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript has loaded');

    const form = document.querySelector('#form')
    form.addEventListener('submit', handleFormSubmit)
})

const handleFormSubmit = function (event){
    event.preventDefault()

    const table = document.getElementById("todo-table");
    var row = table.insertRow(-1);
    var newCell = row.insertCell(0);
    newCell.innerHTML = `${this.task.value} ${this.date.value} ${this.time.value}`;
  }