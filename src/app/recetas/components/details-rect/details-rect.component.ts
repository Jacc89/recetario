// import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details-rect',
  templateUrl: './details-rect.component.html',
  styleUrls: ['./details-rect.component.scss']
})
export class DetailsRectComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<DetailsRectComponent>,) { }

  ngOnInit(): void {
  }
  Cerrar(){
    this.dialogRef.close();

  }
  Guardar(){
    console.log('guardar');
    // this.formPro.value.id = this.id;
    // this.service.actualizarPro(this.id,this.formPro.value)
    // .subscribe((data): any=>{
    //   this.router.navigate(['/producto']);
    //   window.location.reload();
    // })
    this.dialogRef.close();

  }

}
