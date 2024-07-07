import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { first } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-emp',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './manage-emp.component.html',
  styleUrl: './manage-emp.component.css'
})
export class ManageEmpComponent {
  
  public employeeOb={

    firstName:"",
    lastName:"",
    email:"",
    departmentId:"",
    rollId:"" 
  }

  constructor(private http:HttpClient){}

  addEmployee(){
    
    this.http.post("http://localhost:8080/emp-controller/add-employee",this.employeeOb).subscribe(
      (data) =>{
        
        Swal.fire({
          title: "Employee Added!",
          text: "You clicked the button!",
          icon: "success"
        });
        
      }
    )
  }
}
