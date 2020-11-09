import { Component, OnInit } from '@angular/core';
import { Order } from './_models/order_info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pizza Treat Dashboard';

  constructor() { }
  orders = [
    {
      order_number: 1,
      order_status: 1,
      customer_name: 'Joe Biden',
      address: "11-16 Donegall Square E,Belfast, BT1 5UB,NI, UK",
      order_items: [
        {
          name: 'Veg Loaded',
          amount: 100.00,
          extra_info: 'Fresh Pan Pizza',
          qty: 1
        },
        {
          name: 'Burger Pizza - Classic Veg',
          amount: 200.00,
          extra_info: '',
          qty: 1
        }
      ],
      order_amount: ''
    },
    {
      order_number: 2,
      order_status: 1,
      customer_name: 'Donald Trumph',
      address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ,England, UK",
      order_items: [
        {
          name: 'Butterscotch Muse cake',
          amount: 100.00,
          extra_info: '',
          qty: 1
        },
        {
          name: 'Choco Lava Cake',
          amount: 50.00,
          extra_info: '',
          qty: 1
        }
      ],
      order_amount: ''
    }
  ]
  // Order end

  //Logic for changing status of respective on click of button
  changeStatus = (e) => {
    this.orders.findIndex((x) => {
      if (x.order_number == e && x.order_status < 3) {
        x.order_status++;
      }
    });
  }
  viewDetails(o) {
    this.viewOrder = o;
  }

  // Helper function for summation of order amount
  sum = (items, prop) => {
    return items.reduce(function (a, b) {
      return a + b[prop];
    }, 0);
  };

  ngOnInit() {
    this.orders.forEach((order) => {
      order['order_amount'] = this.sum(order.order_items, 'amount')
    })
  }
  viewOrder = this.orders[0];
}
