import { Employee } from './employee';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  employees: Employee[] = [
    new Employee(1),
    new Employee(2),
    new Employee(3),
    new Employee(4),
  ];

  constructor() { }

  getEmployees(): Employee[] {
    return this.employees;
  }
  getEmployee(id): Employee {
    let foundEmployee = this.employees.filter((employee: Employee) => {
      return employee.id === parseInt(id) ? employee : false;
    });

    return foundEmployee[0];
  }



}
