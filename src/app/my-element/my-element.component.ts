import { Component, OnInit, Input } from '@angular/core';
import { TestDataService } from '../test-data.service';

@Component({
  selector: 'app-my-element',
  templateUrl: './my-element.component.html',
  styleUrls: ['./my-element.component.css']
})
export class MyElementComponent implements OnInit {

  @Input() value = '';

  constructor(private tds: TestDataService) { }

  ngOnInit() {
  }

  clicked() {
    this.tds.bump();
    this.value = this.value + '.';
  }

}
