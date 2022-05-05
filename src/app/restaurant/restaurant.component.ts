import { Component, OnInit } from '@angular/core';

interface Article {
  id: string;
  name: string;
  price: number;
  quantity: number;
  sum?: number;
}


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  articles: Article[] = [{
    id: '1',
    name: 'Pizza Margarita',
    price: 220,
    quantity: 1,
  }, {
    id: '2',
    name: 'Capricoza',
    price: 200,
    quantity: 1

  }, {
    id: '3',
    name: 'Salami',
    price: 180,
    quantity: 1
  },
  {
    id: '4',
    name: 'Fruti Di Mare',
    price: 250,
    quantity: 1
  },
  {
    id: '5',
    name: 'Funghi',
    price: 230,
    quantity: 1
  }
  ]

  selectetArticles: Article[] = []

  id: string = '';
  productName: string = '';
  price: number | undefined;
  quantity: number = 1;
  total: number = 0;

  totalAmount: number = 0;

  test: string = ''

  ngOnInit() {

  }

  selectArticle(item: Article) {
    this.id = item.id;
    this.productName = item.name;
    this.price = item.price;

    this.calculate()

  }

  add() {
    let object: Article = {
      id: this.id,
      name: this.productName,
      price: this.price!,
      quantity: this.quantity
    }
    this.selectetArticles.push(object)
    this.clear()
    this.calculate()
    this.calculateTotalamount()
  }
  clear() {
    this.id = '';
    this.productName = '';
    this.price = undefined;
    this.quantity = 1;
    this.total = 0;
  }

  calculate() {
    this.total = this.price! * this.quantity

    this.selectetArticles.forEach(x => {
      x.sum = x.price * x.quantity
    })


  }

  calculateTotalamount() {
    this.totalAmount = this.selectetArticles.reduce((a, b) => a + b.sum!, 0);
  }

  remove(index: number) {
    this.selectetArticles.splice(index, 1)

    this.calculateTotalamount()
  }

  order() {
    alert('Articles successfully ordered')
  }

}
