import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as:AuthService) { }

  ngOnInit(): void {
  }

  login(loginForm){
    let data = loginForm.value
    this.as.signIn(data.email, data.password).then(result => {
     console.error();
       })
    .catch( err => {
      console.log(err)
    })

  }
}
