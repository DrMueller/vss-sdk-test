/// <reference types="vss-web-extension-sdk" />

import { Component } from '@angular/core';

import { ActivtyStatistic } from 'VSS/VSS';

import * as typelessPackage from 'vss-web-extension-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public test(): void {
    const tra = new ActivtyStatistic();
  }
}
