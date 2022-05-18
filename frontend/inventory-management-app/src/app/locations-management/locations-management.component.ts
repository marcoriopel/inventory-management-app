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
	locations: any = []

  constructor(public dialog: MatDialog, protected http: HttpClient) { }

  ngOnInit(): void {
    this.getLocationsList()
  }

  addLocation() {
    console.log("openCreationDialog()");
    const dialogRef = this.dialog.open(LocationsCreationComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getLocationsList()
    });
  }

  removeLocation(id: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		headers.set('access-control-allow-origin', "*");
		headers.set('withCredentials', 'false');
    const url = "http://localhost:3000/api/location/" + id
    this.http
			.delete(url, {
				headers: headers,
				observe: 'response',
				withCredentials: false
			})
			.subscribe({
				next: (resp:any) => {
          console.log(resp)
          if (resp.body != null) {
            this.locations = resp.body;
          }
				},
				error: (error: any) => {
					console.log(error)
				}
			});
  }

  getLocationsList() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		headers.set('access-control-allow-origin', "*");
		headers.set('withCredentials', 'false');

    this.http
			.get('http://localhost:3000/api/location/', {
				headers: headers,
				observe: 'response',
				withCredentials: false
			})
			.subscribe({
				next: (resp:any) => {
          if (resp.body != null) {
            this.locations = resp.body;
          }
				},
				error: (error: any) => {
					console.log(error)
				}
			});
  }
  }


