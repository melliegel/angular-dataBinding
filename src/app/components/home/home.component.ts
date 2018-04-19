import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = "Add string";
  newString: string = "Paper Tray";
  strings = [];

  constructor(private _data: DataService) { }

  ngOnInit() {    
    this._data.string.subscribe(res => this.strings = res);
    this._data.changeString(this.strings);
    this.itemCount = this.strings.length;
  }

  addString() {
    this.strings.push(this.newString);
    this.newString = '';    
    this._data.changeString(this.strings);
    this.itemCount = this.strings.length;
  }

  removeString(i) {
    this.strings.splice(i, 1);
    this._data.changeString(this.strings);
    this.itemCount = this.strings.length;
  }

}
