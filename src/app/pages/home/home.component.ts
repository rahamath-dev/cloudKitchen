import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from 'src/app/services/order-detail.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailService) { }
foodData:any;
  ngOnInit(): void {

    this.foodData=this.service.foodDetails;
  }

}
