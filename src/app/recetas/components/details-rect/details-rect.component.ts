import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-details-rect',
  templateUrl: './details-rect.component.html',
  styleUrls: ['./details-rect.component.scss']
})
export class DetailsRectComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
