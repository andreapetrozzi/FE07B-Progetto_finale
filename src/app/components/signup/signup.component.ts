import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  form!: FormGroup;
  user = { username: '', password: '', email: '', role: [] };

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  cSalva(DatiForm: { value: {
    roles: any;
    username: string;
    password: string;
    email: string;
  } }) {
    console.log(0);
    console.log(DatiForm.value);
    const r = Array();
    r.push(DatiForm.value.roles);

    this.user.username = DatiForm.value.username;
    this.user.password = DatiForm.value.password;
    this.user.email = DatiForm.value.email;
    this.user.role = DatiForm.value.roles;

    this.authService.signup(this.user).subscribe(res => {
      console.log(res);
      this.router.navigate(['/login']);
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.InizializzaForm();
  }

  InizializzaForm() {
    console.log('IniziallizzaForm');
    this.form = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    })
    this.form.controls['username'].setValue('');
    this.form.controls['password'].setValue('');
  }

}


