import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  shfaqe = undefined;

  numri1 = 0;
  numri2 = 0;
  rez = 0;

  emri = '';
  mbiemri = '';

  emri1 = '';

  personat = [{
    emri: 'hasan',
    mbiemri: 'ibishi'
  }, {
    emri: "juled",
    mbiemri: "ibishi"
  }, {
    emri: "egzon",
    mbiemri: "ibishi"
  }, {
    emri: "amar",
    mbiemri: "bexheti"
  }, {
    emri: "arta",
    mbiemri: "ziberi"
  }]

  obj = {
    emri: 'juled',
    mbiemri: 'ibishi'
  }

  ngOnInit() {
  }

  myFunc() {
    // if (this.numri1 > this.numri2) {
    //   this.rez = this.numri1 + this.numri2
    // }
    // else {
    //   this.rez = this.numri1 - this.numri2
    // }

    this.personat.push({ emri: 'amar', mbiemri: 'bexheti' })

  }
  myFunc1() {

    this.personat.shift()
  }

  myFunc2() {
    this.personat = this.personat.filter(x => x.mbiemri !== 'ibishi')
  }

  myFunc3() {
    let rez1 = this.personat.find(x => x.emri === 'amar')
    console.log(rez1);

    this.emri = rez1!.emri;
    this.mbiemri = rez1!.mbiemri;
  }
  myFunc4() {

    this.personat = this.personat.filter(x => x.emri === this.emri1)


  }

  myFunc5(index: number) {
    this.personat.splice(index, 1);

  }
}
