import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee/Shared/employee.service';
import { NgForm } from '@angular/forms';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import {ToastrService} from 'ngx-toastr';
import { Employee } from './Shared/employee.model';

declare var M: any; 

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService ) { }
  
 
  //lifecycle hook
  ngOnInit() {
    this.resetForm();
    this.showEmployeelist();
  }


  resetForm(form?: NgForm)
  {
    if(form)
      form.reset();
      this.employeeService.selectedEmployee = {
        _id: "",
        name: "",
        position: "",
        office: "",
        salary: null,
  
      }
  }

  //post request and submit data to the database 
  onSubmit(form: NgForm)
  {

     if(form.value._id =="")
     {
      this.employeeService.postEmployee(form.value).subscribe((res) =>{
        this.resetForm(form);
         this.showEmployeelist();
         M.toast({html : 'saved Successfully', classes: 'rounded'});    
      });
     }  
    else{
      this.employeeService.putEmployee(form.value).subscribe((res) =>{
        this.resetForm(form);
         this.showEmployeelist();
         M.toast({html : 'Update Successfully', classes: 'rounded'});    
      });
    }
 

  }

//get request and shows the all data to the page
  showEmployeelist()
  {
    return this.employeeService.getEmplyoeeList().subscribe((res) =>{
      this.employeeService.employees = res as Employee[] ; 
    });
  }


  //update the data 
  onEdit(emp : Employee)
  {
    this.employeeService.selectedEmployee = emp;
  }

  onDelete(_id: string, form: NgForm)
  {
        if(confirm('Are you sure to delete the record??') == true)
        {
          this.employeeService.deleteEmployee(_id).subscribe((res) => {
            this.showEmployeelist();
            this.resetForm(form);
            M.toast({html : 'Update Successfully', classes: 'rounded'});
          });
        }
  }


}
