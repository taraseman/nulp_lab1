'use strict'

let customers = [];
let projects = [];
let performers = [];



class Customer{
  allProjects = [];

  constructor(name) {
    this.name = name
  }

  addProject(newProject) {
    this.allProjects.push(newProject);
  }

  changeName(newName) {
    this.name = newName;
  }
}

class Project{
  constructor(name, customer, performer, isActive) {
    this.name = name,
    this.customer = customer,
    this.performer = performer,
    this.isActive = isActive
  }

  changePerformer(newPerformer) {
    this.performer = newPerformer;
  }
}

class Performer{
  allProjects = [];

  constructor(name, specialisation) {
    this.name = name,
    this.specialisation = specialisation
  }

  changeProject(newProject) {
    this.project = newProject;
  }
}

class ActiveProject{
  constructor(name, term) {
    this.name = name,
    this.term = term
  }

  changeTerm(newTerm) {
    this.term = newTerm;
  }
}

function addNewCustomer (name) {
  const newCustomer = new Customer(name)
  customers.push(newCustomer);
}

function editeCustomer (name, newName) {
  customers.find(customer => customer.name === name).changeName(newName);
}

function orderNewProject (name, customerName, performerName, isActive) {
  const customer = customers.find(customer => customer.name === customerName);
  const performer = performers.find(performer => performer.name === performerName);

  const newProject = new Project (name, customer, performer, isActive);

  projects.push(newProject);
  customer.allProjects.push(newProject);
  performer.allProjects.push(newProject);

}

function addNewPerformer (name, specialisation) {
    const newPerformer = new Performer(name, specialisation);
    performers.push(newPerformer);
}

function deleteCustomerFromCollection (customerName) {
  customers = customers.filter(customer => customer.name !== customerName); 
}

function findCustomer(customerName) {
    console.log(customers.find(customer => customer.name === customerName));
}

function editProject (projectName, newProjectName) {
  projects.find(project => project.name === projectName).name = newProjectName;
}

function deleteProjectFromColection(name) {
  projects = projects.filter(project => project.name !== name);
}

function deletePerformerFromColection (name) {
    performers = performers.filter(performer => performer.name === name);
}

function editPerformer (name, newName) {
    performers = performers.find(performer => performer.name === name).name = newName;
}

function findAllCustomerProjects (customerName) {
    console.log(customers.find(customer => customer.name === customerName).allProjects);
}

function findAllPerformerProjects (performerName) {
    console.log(performers.find(performer => performer.name === performerName).allProjects);
}

addNewCustomer('Ivan');
addNewCustomer('Andrey');

addNewPerformer('Taras', 'JS');



console.log(customers);
console.log(performers);

//order new project

orderNewProject('todoApp', 'Ivan', 'Taras', true);

console.log(projects);

console.log(customers);
console.log(performers);

// deleteCustomerFromCollection('Ivan')
// console.log(customers);

findCustomer('Ivan');

editProject('todoApp', 'todoApp1');
console.log(projects);

// deleteProjectFromColection('todoApp1');
// console.log(projects);
console.log('All Ivan Projects:')
findAllCustomerProjects('Ivan');

console.log('All Taras projects:')
findAllPerformerProjects('Taras');