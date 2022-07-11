import { Injectable, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EMPLOYEE } from '../models/employee-mock';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit {
  employeeList:Employee[] =EMPLOYEE;
  ngOnInit(){
    
  }

  getEmpList(){
	//Fill your code here
  
  return this.employeeList

  }
  getEmployeeByID(id:number){    
	//Fill your code here
  return this.employeeList.filter((item)=> item.emp_id.toString() === id.toString()) 
  }
  
  deleteEmployeeByID(id:number) {
  this.employeeList = this.employeeList.filter((item)=> item.emp_id !== id)
  return this.employeeList.filter((item)=> item.emp_id !== id);
}

  updateEmployee(employee: Employee){
	//Fill your code here
  let empIndex = this.employeeList.findIndex((item)=>item.emp_id == employee.emp_id);
  console.log("index",empIndex)
  this.employeeList[empIndex] = employee;
  }
}
