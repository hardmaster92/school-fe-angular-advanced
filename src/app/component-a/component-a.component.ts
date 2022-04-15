import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit, DoCheck {
  test: string[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    //this.test.push('Changed');
  }


  testButton(): void {
    this.test.push('Changed');
  }
}
