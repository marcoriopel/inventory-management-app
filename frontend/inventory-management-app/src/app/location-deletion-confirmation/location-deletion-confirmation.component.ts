import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-location-deletion-confirmation',
  templateUrl: './location-deletion-confirmation.component.html',
  styleUrls: ['./location-deletion-confirmation.component.scss']
})
export class LocationDeletionConfirmationComponent implements OnInit {
  itemIncrementer: any
  constructor(public dialogRef: MatDialogRef<LocationDeletionConfirmationComponent>) { }

  ngOnInit(): void {
  }
  
  confirmation(isConfirmed: boolean): void {
    this.dialogRef.close(isConfirmed);
  }

}
