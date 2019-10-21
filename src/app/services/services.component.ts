import { Component, OnInit } from '@angular/core';
import { SERVICES } from './../mock-services';
import { Service } from './../services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {


  services = SERVICES;
  constructor() { }

  ngOnInit() {
  }


}
