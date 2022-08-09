import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _auth: AuthService,
    private _router: Router
    ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(5)]),
    })
  }


  get email(){
    return this.form.get('email')
  }

  get password(){
    return this.form.get('password')
  }

  submit (): void {
    //console.log(this.form.getRawValue())
    this._auth.registerUser(this.form.getRawValue())
    .subscribe({
      next: res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])
      },
      error: err => console.log(err)
    })
  }
}
