import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  infos = {
    name: "Jasser Saanoun",
    email: "saanoun.jasser21@gmail.com"
  };

  constructor() { }

  ngOnInit() {
  }

}
