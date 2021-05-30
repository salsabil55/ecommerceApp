import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as:AuthService , private router:Router) { }

  ngOnInit(): void {
  }

  login(loginForm){
    let data = loginForm.value
    this.as.signIn(data.email, data.password).then(() => {
     this.router.navigate(['/']);

       })
    .catch( err => {
      console.log(err)
    })

  }
}
