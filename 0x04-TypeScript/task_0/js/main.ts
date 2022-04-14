interface Student {
	  firstName: string;
	  lastName: string;
	  age: number;
	  location: string;
}

const student1: Student = {
      firstName: "John",
      lastName: "Doe",
      age: 24,
      location: "Nairobi"
}

const student2: Student = {
      firstName: "Jane",
      lastName: "Doe",
      age: 26,
      location: "Mombasa"
}

const studentList: Student[] = [student1, student2]

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach(student => {
  const row = document.createElement('tr');
  const cName = document.createElement('td');
  const cLocation = document.createElement('td');
  cName.textContent = student.firstName;
  cLocation.textContent = student.location;
  row.appendChild(cName);
  row.appendChild(cLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);