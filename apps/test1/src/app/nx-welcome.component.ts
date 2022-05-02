import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'tst1-nx-welcome',
  template: `
    <!--  WELCOME  -->
    <div id="welcome">
      <h1>
        <span> Hello there, </span>
        Welcome test1 👋
      </h1>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
