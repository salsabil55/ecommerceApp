import { Component, OnInit } from '@angular/core';
import { Good } from '../interfaces/good.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  goods: Good[] = [
    {
      name : 'Smart Watch' , price: 20 , photoUrl: 'assets/img/watch.png'
    },
    {
      name : 'Nike Shoes' , price: 100 , photoUrl: 'assets/img/nike.png'

    },
    {
      name : 'Smart Headphones' , price: 50 , photoUrl: 'assets/img/headphones.png'

    }
  ]
  constructor() { }

  ngOnInit(): void {

  }

  addToCart(index){
    console.log('added:' ,this.goods[index]);
  }

}
