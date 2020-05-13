import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `
    <p>
      Button! Test!
    </p>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
