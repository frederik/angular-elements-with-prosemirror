import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-element',
  templateUrl: './my-element.component.html',
  styleUrls: ['./my-element.component.css']
})
export class MyElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    alert('Clicked');
  }

}
