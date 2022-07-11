import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/assets/models/employee';
import { EmployeeService } from 'src/assets/services/employee-service.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeelist!: Employee[];
  constructor(private service:EmployeeService,private router:Router) {}

  ngOnInit(): void {
    this.employeelist=this.service.getEmpList();
  }
  
  deleteEmployee(id:number){
  //Fill your code here
    console.log
    this.employeelist=this.service.deleteEmployeeByID(id);
    alert("Employee deleted successfully");
  }

  editEmployee(id:number){
    this.router.navigate(['/empEdit',id]);
  }
}
