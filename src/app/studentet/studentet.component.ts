import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Student {
  id: number;
  name: string;
  username: string;
  company: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-studentet',
  templateUrl: './studentet.component.html',
  styleUrls: ['./studentet.component.scss']
})
export class StudentetComponent implements OnInit {

  studentet: Student[] = []
  studentetGlobal: Student[] = []

  constructor(private http: HttpClient) { }

  id: number = 0;
  name: string = '';
  username: string = '';
  company: string = '';
  email: string = '';
  phone: string = '';
  get: string = '';


  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.ir/users').subscribe((x: any) => {
      console.log(x);

      this.studentet = x;
      this.studentetGlobal = x;
    })


  }
  addPeople() {
    let object: Student = {
      id: this.id,
      name: this.name,
      username: this.username,
      company: this.company,
      email: this.email,
      phone: this.phone
    }
    this.studentet.push(object);

    this.clear()
  }

  update() {
    let student = this.studentet.find(x => x.id === this.id)

    if (student) {
      student.name = this.name
      student.username = this.username
      student.company = this.company
      student.email = this.email
      student.phone = this.phone
    }



    this.clear()
  }

  clear() {
    this.id = 0;
    this.name = '';
    this.username = '';
    this.company = '';
    this.email = '';
    this.phone = '';

    this.studentet = this.studentetGlobal;
  }

  edit(item: Student) {
    console.log(item);
    this.id = item.id;
    this.name = item.name;
    this.username = item.username;
    this.company = item.company;
    this.email = item.email;
    this.phone = item.phone;

    this.get = '';


  }
  find() {
    this.studentet = this.studentet.filter(x => x.username === this.get)
  }

  deletet(studentId: number) {
    this.studentet = this.studentet.filter(x => x.id !== studentId);
  }

  control() {
    let y = !this.name || !this.username || !this.company || !this.email || !this.phone;

    return y
  }
}