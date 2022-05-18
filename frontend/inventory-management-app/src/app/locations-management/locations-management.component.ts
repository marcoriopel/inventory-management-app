import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LocationsCreationComponent } from '../locations-creation/locations-creation.component';

@Component({
  selector: 'app-locations-management',
  templateUrl: './locations-management.component.html',
  styleUrls: ['./locations-management.component.scss']
})
export class LocationsManagementComponent implements OnInit {
	name = new FormControl('');

  constructor(public dialog: MatDialog, protected http: HttpClient) { }

  ngOnInit(): void {
  }

  addLocation() {
    console.log("openCreationDialog()");
    const dialogRef = this.dialog.open(LocationsCreationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  }


