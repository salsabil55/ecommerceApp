import { Component, OnDestroy, OnInit } from '@angular/core';
import { Good } from '../interfaces/good.interface';
import { GoodsService } from './../../services/goods.service';
import { element } from 'protractor';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  goods: Good[] = []
  goodSubscribe : Subscription;
  constructor(private gs:GoodsService) { }

  ngOnInit() {
    this.goodSubscribe = this.gs.getAllGoods().subscribe(data=> {

        this.goods = data.map(element => {
          return {
            id: element.payload.doc.id,
            name: element.payload.doc.data()['name'],
            price: element.payload.doc.data()['price'],
            photoUrl: element.payload.doc.data()['photoUrl'],


          }

        })
      }
    )
  }

  ngOnDestroy() {
    this.goodSubscribe.unsubscribe()
  }

  addToCart(index){
    console.log('added:' ,this.goods[index]);
  }

}
