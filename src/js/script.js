`Use strict`;

const appendElement = (parentElement = null, element = null) => {
  if (!parentElement || !element) return;
  parentElement.append(element);
};

const createTable = () => {
  const countColumn = 10;
  const table = document.createElement('table');
  table.className = 'table table-striped';
  const tbody = document.createElement('tbody');
  table.append(tbody);

  let row = 0;

  const interval = setInterval(() => { // створення ідентифікатору interval, для повернення setInterval
    if (row >= countColumn) {
      clearInterval(interval); // зупинка виконання, якщо row буде дорівнювати tableSize.
      return;
    }

    const tr = document.createElement('tr');

    for (let i = 1; i <= countColumn; i++) {
      const td = document.createElement('td');
      td.innerHTML = `${row * countColumn + i}`;
      tr.append(td);
    }

    tbody.append(tr);
    row++;
  }, 1000);

  return table;
};

appendElement(document.body, createTable());
