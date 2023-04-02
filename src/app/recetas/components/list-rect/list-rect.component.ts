import {Component, ViewChild, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DetailsRectComponent } from '../details-rect/details-rect.component';

@Component({
  selector: 'app-list-rect',
  templateUrl: './list-rect.component.html',
  styleUrls: ['./list-rect.component.scss']
})
export class ListRectComponent implements OnInit {
 


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  ActualizarProducto(){
    console.log();
    this.dialog.open(DetailsRectComponent )
   }

}
