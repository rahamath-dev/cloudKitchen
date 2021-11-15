import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from 'src/app/services/order-detail.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderDetailService) { }
  foodData:any;
  ngOnInit(): void {
    this.foodData=this.service.foodDetails;
  }

}
