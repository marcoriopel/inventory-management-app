import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-locations-creation',
  templateUrl: './locations-creation.component.html',
  styleUrls: ['./locations-creation.component.scss']
})
export class LocationsCreationComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  constructor(protected http: HttpClient, public dialogRef: MatDialogRef<LocationsCreationComponent>) { }

  ngOnInit(): void {
  }

  addLocation() {
    const data = {
			name: this.name.value
		};

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		headers.set('access-control-allow-origin', "*");
		headers.set('withCredentials', 'false');
	console.log(data)
    this.http
			.post('http://localhost:3000/api/location/', data, {
				headers: headers,
				observe: 'response',
				withCredentials: false
			})
			.subscribe({
				next: () => {
					this.dialogRef.close('success');
				},
				error: (error) => {
					const status_code = JSON.stringify(error.status);
					console.log(status_code)
				}
			});
  }

}
