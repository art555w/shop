import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IUser} from "../../shared/interface";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  form!: FormGroup
  submitted = false
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit() {

    if (!this.form.invalid) {
      this.submitted = true
      const user: IUser = {
        email: this.form.value.email,
        password: this.form.value.password,
      }

      this.authService.login(user).subscribe({
        next: () => {
          this.submitted = false
          this.router.navigate(['/admin', 'dashboard'])
        },
        error: () => {
          this.submitted = false
        }
      })
    }

  }
}
