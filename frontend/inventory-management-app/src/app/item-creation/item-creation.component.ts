import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-creation',
  templateUrl: './item-creation.component.html',
  styleUrls: ['./item-creation.component.scss']
})
export class ItemCreationComponent implements OnInit {
  locations: any = []
  itemForm = new FormGroup(
		{
			name: new FormControl('', [Validators.required]),
			price: new FormControl(''),
			description: new FormControl(''),
			quantity: new FormControl(''),
      location: new FormControl('')
		}
	);

  constructor(protected http: HttpClient, public dialogRef: MatDialogRef<ItemCreationComponent>) { }

  ngOnInit(): void {
	  this.getLocationsList()
  }

  addInventoryItem() {
    const data = {
	  name: this.itemForm.controls['name'].value,
	  price: this.itemForm.controls['price'].value,
	  description: this.itemForm.controls['description'].value,
      quantity: this.itemForm.controls['quantity'].value,
      location: this.itemForm.controls['location'].value
		};

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
		headers.set('access-control-allow-origin', "*");
		headers.set('withCredentials', 'false');

    this.http
			.post('/api/item/', data, {
				headers: headers,
				observe: 'response',
				withCredentials: false
			})
			.subscribe({
				next: () => {
					this.closeDialog(true)
				}
			});
  }

  closeDialog(createdItem: boolean) {
	this.dialogRef.close(createdItem);
	}

  getLocationsList() {
	const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	headers.set('access-control-allow-origin', "*");
	headers.set('withCredentials', 'false');

this.http
		.get('/api/location/', {
			headers: headers,
			observe: 'response',
			withCredentials: false
		})
		.subscribe({
			next: (resp:any) => {
	  if (resp.body != null) {
		this.locations = resp.body;
	  }
			}
		});
  }

}
