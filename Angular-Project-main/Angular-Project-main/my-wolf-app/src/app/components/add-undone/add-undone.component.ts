import { Component,ContentChild,Input, OnInit, ViewChild } from '@angular/core';
import { UnDoneModel } from 'src/app/models/unDoneModel';

@Component({
  selector: 'app-add-undone',
  templateUrl: './add-undone.component.html',
  styleUrls: ['./add-undone.component.scss']
})
export class AddUndoneComponent implements OnInit {

  @Input()  unDoneModels:UnDoneModel[];
  @ContentChild("addInput") addInput:any;


  constructor() {
  }

  ngOnInit(): void {
  }
    addUnDoneItem(addInput:any){
      let unDoneModel = new UnDoneModel();
      unDoneModel.title = addInput.value;
      unDoneModel.date = Date();
      this.unDoneModels.push(unDoneModel);
    }

  

}
