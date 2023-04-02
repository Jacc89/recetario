import {Component, ViewChild, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';
import { DetailsRectComponent } from '../details-rect/details-rect.component';

@Component({
  selector: 'app-list-rect',
  templateUrl: './list-rect.component.html',
  styleUrls: ['./list-rect.component.scss']
})
export class ListRectComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(DetailsRectComponent, {restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

}
