import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ushtrime',
  templateUrl: './ushtrime.component.html',
  styleUrls: ['./ushtrime.component.scss']
})
export class UshtrimeComponent implements OnInit {

  constructor() { }

  veturat = [{
    id: 1,
    emri: 'bmw',

  }, {
    id: 2,
    emri: 'mercedes',

  }, {
    id: 3,
    emri: 'citroen',

  }]



  veturaSelektuar: string = ''




  ngOnInit() {
  }




  shtoVetura() {
    let shto = {
      id: 4,
      emri: this.veturaSelektuar,
    }
    this.veturat.push(shto)
  }
}

