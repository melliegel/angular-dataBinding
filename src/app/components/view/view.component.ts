import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  strings: any;
  itemTotal: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._data.string.subscribe(res => this.strings = res);
    this.itemTotal = this.strings.length;
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
