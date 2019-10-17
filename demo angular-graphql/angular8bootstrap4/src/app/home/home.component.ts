import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Indiastate = [
    "Rajasthan",
    "UP",
    "Mp",
    "Delhi",
    "Goa",
    "Gurjat",
    "Punjab"
  ];
  Ausstate = [

    "New South Wales",
    "Queensland",
    "South Australia",
    "Tasmania"
  ];
  Slstate = [
    "Kandy",
    "Galle",
    "Kegalle",
    "Mannar"
  ];
  constructor() { }

  ngOnInit() {
  }

}
