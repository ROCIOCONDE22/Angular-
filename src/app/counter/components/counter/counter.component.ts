import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
<button (click)="decreaseBy(-1)" >-1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy(+1)">+1</button>
  `
})

export class CounterComponent {
  public counter= 10;

  increaseBy(value: number):void{
    this.counter +=1;
  }

  decreaseBy(value: number): void{
    this.counter -=1;
  }

  resetCounter() {
    this.counter=10;
  }
}
