import { Component, OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-success',
  templateUrl: `./success.component.html`,
  styles: [
  ]
})


export class SuccessComponent implements OnInit {

  constructor(private cartService: CartService) {}

  ngOnInit(){
    localStorage.setItem('angular_store', JSON.stringify([]))
          this.cartService.clearCart()
  }

}
