import { Component, Input, OnInit } from '@angular/core';
import { DoneModel } from 'src/app/models/doneModel';
import { UnDoneModel } from 'src/app/models/unDoneModel';

@Component({
  selector: 'app-undone',
  templateUrl: './undone.component.html',
  styleUrls: ['./undone.component.scss']
})
export class UndoneComponent implements OnInit {

  @Input() unDoneModels:UnDoneModel[];
  @Input() doneModels:DoneModel[];
  constructor() { }

  ngOnInit(): void {
  }

  completeUnDoneItem(doneModel:any){
    this.doneModels.push(doneModel);

    let index = this.unDoneModels.indexOf(doneModel);
    this.unDoneModels.splice(index,1);
  }

  deleteUnDoneItem(doneModel:any){
    let index = this.unDoneModels.indexOf(doneModel);
    this.unDoneModels.splice(index,1);
  }



}
