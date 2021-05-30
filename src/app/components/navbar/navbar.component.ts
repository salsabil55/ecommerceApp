import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUser: boolean = false
  constructor(private as:AuthService) { }

  ngOnInit() {
    this.as.user.subscribe(user => {
      if(user){
        this.isUser = true
      }
      else{
        this.isUser = false
      }
    })
  }

  logout(){
    this.as.logout().then(() => console.log('out'))
  }
}
