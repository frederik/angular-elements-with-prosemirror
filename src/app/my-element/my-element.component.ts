import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { TestDataService } from '../test-data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-my-element',
  templateUrl: './my-element.component.html',
  styleUrls: ['./my-element.component.scss']
})
export class MyElementComponent implements OnInit {

  selected$ = new Subject();

  // users of our custom element can provide a value that is rendered inside the component
  @Input() value = '';

  // we need some way to render the selection state (by toggling a css class)
  @Input() set selected(isSelected: 'true' | 'false') {
    this.selected$.next(isSelected === 'true');
  }

  // when the user hits save, this will emit
  @Output() result = new EventEmitter();

  constructor(private tds: TestDataService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  bump() {
    // directly writing to the service
    this.tds.bump();
    this.value = this.value + '.';
  }

  save(value) {
    // we'll let the node view handle the event
    this.result.emit(value);
  }

}
