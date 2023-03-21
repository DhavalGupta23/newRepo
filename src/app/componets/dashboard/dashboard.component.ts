import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employeeForm!: FormGroup
  constructor( private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    });
  }

  get f(){
    return this.employeeForm.controls;
  }
  
  submit(){
    console.log(this.employeeForm.value);
  }
}
