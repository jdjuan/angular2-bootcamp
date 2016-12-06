import { Employee } from './employee';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees() :Employee[] {
    return [new Employee(1), new Employee(2), new Employee(3)]; 
  }
  
}
