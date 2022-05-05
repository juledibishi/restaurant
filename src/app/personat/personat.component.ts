import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personat',
  templateUrl: './personat.component.html',
  styleUrls: ['./personat.component.scss']
})
export class PersonatComponent implements OnInit {

  personat = [{
    id: this.newId(),
    emri: 'hasan',
    mbiemri: 'ibishi',
    mosha: '25',
    numriamz: '255',
  }, {
    id: this.newId(),
    emri: 'gazmend',
    mbiemri: 'rizvani',
    mosha: '21',
    numriamz: '266',
  }, {
    id: this.newId(),
    emri: 'juled',
    mbiemri: 'kasami',
    mosha: '30',
    numriamz: '277',
  },
  {
    id: this.newId(),
    emri: 'juled',
    mbiemri: 'kasami',
    mosha: '30',
    numriamz: '277',
  }]

  id: string = '';
  emri: string = '';
  mbiemri: string = '';
  mosha: string = '';
  numriamz: string = '';
  filtro: string = '';

  ngOnInit() {
    console.log(this.personat);

  }

  shtoPerson() {

    let obj = {
      id: this.newId(),
      emri: this.emri,
      mbiemri: this.mbiemri,
      mosha: this.mosha,
      numriamz: this.numriamz,
    }

    this.personat.push(obj)

    this.id = '';
    this.emri = '';
    this.mbiemri = '';
    this.mosha = '';
    this.numriamz = '';
  }

  fshijPersonin(obj: any) {

    this.personat = this.personat.filter(x => x.id !== obj.id);

  }

  editoPersonin(obj: any) {
    this.id = obj.id
    this.emri = obj.emri
    this.mbiemri = obj.mbiemri
    this.mosha = obj.mosha
    this.numriamz = obj.numriamz
  }

  ndryshoPersonin() {
    let obj = this.personat.find(x => x.id === this.id)

    if (obj) {
      obj.emri = this.emri
      obj.mbiemri = this.mbiemri
      obj.mosha = this.mosha
      obj.numriamz = this.numriamz
    }
    this.id = '';
    this.emri = '';
    this.mbiemri = '';
    this.mosha = '';
    this.numriamz = '';




  }
  kerkoPersonat() {
    this.personat = this.personat.filter(x => x.emri === this.filtro)
  }

  newId() {
    return Math.random().toString(16)
  }
}
