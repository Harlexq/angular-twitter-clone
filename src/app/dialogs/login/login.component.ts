import { Component } from '@angular/core';
import { InputControlComponent } from '../../shared/input-control/input-control.component';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputControlComponent, RouterLink, NgIf, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form!: FormGroup;

  ngOnInit() {
    this.loginForm();
  }

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<LoginComponent>,
    private router: Router
  ) {}

  loginForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  login() {
    this.router.navigateByUrl('/home');
  }

  public get newEmail(): FormControl {
    return this.form.get('email') as FormControl;
  }

  closeModal() {
    this.dialogRef.close();
    this.router.navigate([{ outlets: { aux: null } }]);
  }
}
