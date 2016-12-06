import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: Employee;
  id;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => 
      this.id = params['id']);
  }

}
