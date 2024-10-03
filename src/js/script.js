`Use strict`;

const appendElement = (parentElement = null, element = null) => {
  if (!parentElement || !element) return;
  parentElement.append(element);
};

const createTable = () => {
  const tableSize = 10;

  const table = document.createElement('table');
  table.className = 'table table-striped';
  const tbody = document.createElement('tbody');
  table.append(tbody);

  let count = 1;
  for (let i = 0; i < tableSize; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < tableSize; j++) {
      const td = document.createElement('td');
      td.innerHTML = count++;
      tr.append(td);
    }
    tbody.append(tr);
  }

  return table;
};

appendElement(document.body, createTable());
