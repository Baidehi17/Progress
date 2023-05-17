import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router) {}

  ngOnInit(): void {
    // if (this.auth.isLoggedIn()) {
    //   this.router.navigate(['admin']);
    // }
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      // this.auth.login(this.loginForm.value).subscribe(
      //   (result) => {
      //     console.log(result);
      //     this.router.navigate(['/admin']);
      //   },
      //   (err: Error) => {
      //     alert(err.message);
      //   }
      // );
    }
  }
}
