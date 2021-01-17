const inquirer = require("inquirer");
function start() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "View All Employes by Department",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "Exit"
    ]
  })
    .then(function (answer) {
      switch (answer.action) {
        case "View All Employees":
          viewEmployees();
          break;
        case "View All Employees by Department":
          byDepartment();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateRole();
          break;
        case "View All Roles":
          allRoles();
          break;
        case "Add Role":
          addRole();
          break;
        case "exit":
          connection.end();
          break;
      }
    });
}
function viewEmployees() {
}
function byDepartment() {
  inquirer.prompt({
    name: "department",
    type: "list",
    choices: ['Sales', 'Engineering', 'Finance', 'Legal'],
    message: "What department would you like to search for?"
  }) //.then(()=>{})
}

function addEmployee() {
  inquirer.prompt([
    {
      name: "firstName",
      type: "input",
      message: "What is the employee's first name?"
    },
    {
      name: "lastName",
      type: "input",
      message: "What is the employee's last name?"
    },
    {
      name: "role",
      type: "list",
      choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead'],
      message: "What is the employee's role?"
    },
    {
      name: "manager",
      type: "list",
      choices: ['none'],
      message: "Who is the employee's manager?"
    }
  ])
    .then(function (answer) {

console.log("Inserting a new employee...\n");
  const query = connection.query("INSERT INTO employee SET ?",
    {
      flavor: "Rocky Road",
      price: 3.0,
      quantity: 50
    },
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " product inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateProduct();
    }
}}
function updateRole() {
  inquirer.prompt({
    name: "role",
    type: "list",
    choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead'],
    message: "What is the employee's new role?"
  })
  // .then(()=>{})
}
function allRoles() {
}
function addRole() {
  inquirer.prompt(
    {
      name: "addRole",
      type: "list",
      choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead'],
      message: "What role do you want to add?"
    }
  ) //.then(()=>{})
}

module.exports = start