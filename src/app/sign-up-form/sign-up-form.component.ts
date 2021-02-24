import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from "@angular/forms"
import {PasswordChecker} from "./password-checker"

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }
  RegisterForm:FormGroup;
  submitted:boolean;


  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",[Validators.required, Validators.email ]],
      password:["",[Validators.required , Validators.minLength(6)] ],
      confirmPassword:["",Validators.required],
      acceptTandC:[false,Validators.requiredTrue],
    
    },
    {
      Validators:PasswordChecker('password','confirmPassword')
    });

  }

  get h()
  {
    return this.RegisterForm.controls
  }

  onSubmit()
  {
    this.submitted = true;
    if(this.RegisterForm.invalid)
    {
      return;
    }
     console.table(this.RegisterForm.value);
     console.table(this.RegisterForm)
  }

  onReset()
  {
    this.submitted = false;
    this.RegisterForm.reset();
  }

}
