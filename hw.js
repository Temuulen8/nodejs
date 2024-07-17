const employees = [
  {
    name: "Naraa",
    age: 22,
    salary: 1000,
  },
  {
    name: "Saraa",
    age: 20,
    salary: 2000,
  },
  {
    name: "Baraa",
    age: 26,
    salary: 3000,
  },
  {
    name: "Daraa",
    age: 29,
    salary: 4000,
  },
  {
    name: "Haraa",
    age: 22,
    salary: 5000,
  },
];

// const cards = employees.map((employee) => {
//   return `
//     <div>
//         ${employee.name} = ${employee.age}
//     </div>
//     `;
// });

// console.log(cards);

// const cards = employees.filter((employee) => {
//   return employee.salary > 3000 && employee.age > 25;
// });

// console.log(cards);

const cards = employees.reduce(
  (umnuhUtga, employee) => umnuhUtga + employee.salary,
  0
);

console.log(cards);
