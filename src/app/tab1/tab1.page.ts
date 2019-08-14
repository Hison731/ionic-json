import { Component } from '@angular/core';
import { DataProvider } from '../../provider/data';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public dataProvider: DataProvider
  ) {

  }

}
