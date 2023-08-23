import { Component, OnInit } from '@angular/core';
import { DoneModel } from '../../models/doneModel';
import { UnDoneModel } from '../../models/unDoneModel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  unDoneModels:UnDoneModel[] = [];
  doneModels:DoneModel[] = [];





  constructor() {
    console.log("constructor çalisti");
  }

  ngOnInit(): void {
    console.log("ngOnIt çalisti");
  }

}
