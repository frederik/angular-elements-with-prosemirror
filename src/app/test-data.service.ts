import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {
  // just so we have a shared instance
  public value = 0;

  public bump() {
    this.value++;
  }

  public reset(value) {
    this.value = value;
  }
}
