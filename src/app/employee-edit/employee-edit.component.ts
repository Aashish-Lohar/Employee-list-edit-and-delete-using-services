import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';
import { EmployeeService } from 'src/assets/services/employee-service.service';
import { Employee } from '../../assets/models/employee';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})


export class EmployeeEditComponent implements OnInit {

  id!: number;
  name!: string;
  designation!: string;
  mobile!: number;
  email!: string;
  age!: number;
  date!: Date;

  constructor(public datepipe:DatePipe, private route: ActivatedRoute,private service:EmployeeService,private router: Router) {}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    let employeedata:Employee[];
    employeedata=this.service.getEmployeeByID(this.id);
    this.name=employeedata[0].emp_name;
    this.designation=employeedata[0].designation;
    this.mobile=employeedata[0].mobile;
    this.email=employeedata[0].email;
    this.age=employeedata[0].age;
    this.date=employeedata[0].doj;
  }


  editEmployee(){

    let employee:Employee = new Employee();
    employee.emp_id=this.id;
    employee.emp_name=this.name;
    employee.designation=this.designation;
    employee.mobile=this.mobile;
    employee.email=this.email;
    employee.age=this.age;
    employee.doj= new Date(this.date)
    this.service.updateEmployee(employee);
    alert("Employee data updated successfully");
    this.router.navigate(['empList'])
  }

  goBack(){
    this.router.navigate(['empList']);
  }

}
